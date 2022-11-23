require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const shortUrlRouter = require("./routers/shortUrlRouter");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", shortUrlRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
