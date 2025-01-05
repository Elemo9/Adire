const express = require('express');
const router = express.Router();
const subscribeController = require('../controllers/subscribeController');
const validateEmail = require('../middleware/validateEmail');
const rateLimit = require('express-rate-limit');

// Rate Limiting Middleware
const subscribeLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 2, // limit each IP to 5 requests per windowMs
  message: { error: 'Too many subscription attempts. Please try again later.' }
});

router.post('/subscribe', subscribeLimiter, validateEmail, subscribeController.subscribe);

module.exports = router;
