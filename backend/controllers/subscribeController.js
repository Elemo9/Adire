const db = require('../models/emailModel');

exports.subscribe = (req, res) => {
  const { email } = req.body;

  db.run(`INSERT INTO emails (email) VALUES (?)`, [email], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ error: 'Email already subscribed' });
      }
      console.error("Error inserting email:", err.message);
      return res.status(500).json({ error: 'Failed to subscribe' });
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    res.status(200).json({ message: 'Subscribed successfully!' });
  });
};
