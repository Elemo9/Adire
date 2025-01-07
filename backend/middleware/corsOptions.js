const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://adiremarket.com',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

module.exports = corsOptions;
