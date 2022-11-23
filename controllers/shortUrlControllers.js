const url = require("url");
const shortId = require("shortid");
const validUrl = require("valid-url");
const ShortUrl = require("./../models/shortUrlModels");

let shortUrlCreate = async (req, res, next) => {
  let link = req.body.linkUrl;
  if (link !== null && validUrl.isUri(link)) {
    try {
      let body = {
        shortId: shortId.generate(),
        fullUrl: link,
      };
      ShortUrl.findOne({ fullUrl: link }, (err, short) => {
        if (err) return next(err);
        if (short) {
          return res.json({
            status: true,
            shortId: short.shortId,
            fullUrl: short.fullUrl,
            message: "Short Link Already Exists",
          });
        } else {
          ShortUrl.create(body, (err, data) => {
            if (err) return next(err);
            return res.json({
              status: true,
              shortId: data.shortId,
              fullUrl: data.fullUrl,
              message: "Short Link found successfully",
            });
          });
        }
      });
    } catch (err) {
      return res.json({
        status: false,
        message: "Something went wrong",
      });
    }
  } else {
    return res.json({
      status: false,
      message: "Please Enter a Valid URL",
    });
  }
};

let shortUrlHitLink = async (req, res, next) => {
  let shortCode = req.body.shortCode;
  try {
    if (!shortId.isValid(shortCode)) {
      return res.json({
        status: false,
        message: "The link is not exist",
      });
    }

    ShortUrl.findOne({ shortId: shortCode }, (err, short) => {
      if (err) return next(err);

      if (short) {
        ShortUrl.findByIdAndUpdate(
          short._id,
          { $inc: { hitCount: 1 } },
          { new: true },
          (err, update) => {
            return res.json({
              status: true,
              shortId: update.shortId,
              fullUrl: update.fullUrl,
              hitCount: update.hitCount,
              message: "Short Link created successfully",
            });
          }
        );
      } else {
        return res.json({
          status: false,
          message: "The link is not exist",
        });
      }
    });
  } catch (err) {
    return res.json({
      status: false,
      message: "Something went wrong",
    });
  }
};

let shortUrlGet = async (req, res, next) => {
  let shortCode = req.body.shortCode;
  try {
    if (!shortId.isValid(shortCode)) {
      return res.json({
        status: false,
        message: "The link is not exist",
      });
    }

    ShortUrl.findOne({ shortId: shortCode }, (err, short) => {
      if (err) return next(err);

      if (short) {
        ShortUrl.findById(short._id, (err, update) => {
          return res.json({
            status: true,
            shortId: update.shortId,
            fullUrl: update.fullUrl,
            hitCount: update.hitCount,
            message: "Short Link created successfully",
          });
        });
      } else {
        return res.json({
          status: false,
          message: "The link is not exist",
        });
      }
    });
  } catch (err) {
    return res.json({
      status: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  shortUrlCreate: shortUrlCreate,
  shortUrlHitLink: shortUrlHitLink,
  shortUrlGet: shortUrlGet,
};
