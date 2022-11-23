const mongoose = require("mongoose");
const { MONGODB_URI } = require("./constant");

const connect = mongoose.connect(MONGODB_URI);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is Successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB Connection", error);
});

module.exports = mongoose;
