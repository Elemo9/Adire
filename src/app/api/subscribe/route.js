// src/app/api/subscribe/route.js

import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import validator from "validator";
import path from "path";
import fs from "fs";

// Singleton database connection
let dbPromise = null;

/**
 * Initializes the SQLite database.
 * Ensures the 'db' directory and 'emails' table exist.
 * @returns {Promise<sqlite3.Database>} The SQLite database instance.
 */
async function initializeDb() {
  if (dbPromise) return dbPromise;

  // Construct the absolute path to the database file
  const dbDirectory = path.join(process.cwd(), "db");
  const dbPath = path.join(dbDirectory, "emails.db");

  // Log the database path for verification
  console.log(`Database Path: ${dbPath}`);
  console.log(`Current Working Directory: ${process.cwd()}`);

  // Ensure the 'db' directory exists
  if (!fs.existsSync(dbDirectory)) {
    try {
      fs.mkdirSync(dbDirectory, { recursive: true });
      console.log(`Created directory: ${dbDirectory}`);
    } catch (err) {
      console.error(`Failed to create directory ${dbDirectory}:`, err);
      throw err; // Exit initialization if directory creation fails
    }
  }

  // Initialize and open the SQLite database
  dbPromise = open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  const db = await dbPromise;

  // Ensure the emails table exists
  try {
    await db.run(`
      CREATE TABLE IF NOT EXISTS emails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL
      )
    `);
    console.log("Emails table ensured.");
  } catch (err) {
    console.error("Database initialization failed:", err);
    throw err; // Exit initialization if table creation fails
  }

  return db;
}

export async function POST(request) {
  try {
    // Initialize the database and ensure the table exists
    const db = await initializeDb();

    // Parse the JSON body of the request
    const { email } = await request.json();

    // Validate email presence
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    try {
      // Insert the email into the database
      await db.run("INSERT INTO emails (email) VALUES (?)", [email]);
      return NextResponse.json(
        { message: "Subscribed successfully!" },
        { status: 200 }
      );
    } catch (err) {
      // Handle duplicate email entries
      if (err.message.includes("UNIQUE constraint failed")) {
        return NextResponse.json(
          { error: "Email already subscribed" },
          { status: 400 }
        );
      }
      // Handle other insertion errors
      console.error("Database insertion error:", err.message);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Request handling error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
