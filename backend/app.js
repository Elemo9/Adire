const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const subscribeRoutes = require('./routes/subscribeRoutes');
const corsOptions = require('./middleware/corsOptions');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Routes
app.use('/api', subscribeRoutes);

// Graceful Shutdown
process.on('SIGINT', () => {
  const db = require('./models/emailModel');
  db.close((err) => {
    if (err) {
      console.error("Error closing the database connection:", err.message);
    } else {
      console.log('Closed the database connection.');
    }
    process.exit(0);
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
