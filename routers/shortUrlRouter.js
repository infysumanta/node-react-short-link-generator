const express = require("express");
const router = express.Router();

const { shortUrlCreate } = require("./../controllers/shortUrlControllers");

router.get("/", (req, res) => {
  res.send({
    status: true,
    message: "The Api Server is Running!",
  });
});

router.get("/short/create", shortUrlCreate);

module.exports = router;
