const config = {
    server: {
      port: process.env.PORT || 5555,
    },
    db: {
      uri: process.env.DB_URI,
    },
    token: {
      secret: process.env.TOKEN_SECRET,
    },
  };
  
  module.exports = config;
  