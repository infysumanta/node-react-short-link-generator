module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost/react-node-shortlink",
  NODE_ENV: process.env.NODE_ENV || "development",
};
