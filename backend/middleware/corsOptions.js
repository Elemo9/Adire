const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
  };
  
  module.exports = corsOptions;
  