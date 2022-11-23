const express = require("express");
const router = express.Router();

const {
  shortUrlCreate,
  shortUrlHitLink,
  shortUrlGet,
} = require("./../controllers/shortUrlControllers");

router.get("/", (req, res) => {
  res.send({
    status: true,
    message: "The Api Server is Running!",
  });
});

router.post("/short/create", shortUrlCreate);
router.post("/short/hit-link", shortUrlHitLink);
router.post("/short/get", shortUrlGet);

module.exports = router;
