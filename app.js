require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Node Server is Running");
});

module.exports = app;
