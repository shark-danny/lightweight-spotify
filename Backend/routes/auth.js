const express = require("express");
const SPOTIFY = require("../services/spotify");
const { encodeToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/url", async (req, res, next) => {
  try {
    const url = await SPOTIFY.createAuthorizeURL();
    res.send({ url, error: false });
  } catch (error) {
    next(error);
  }
});

router.get("/callback", async (req, res) => {
  try {
    const { code } = req.query;
    const accesstoken = await SPOTIFY.getToken(code);
    const token = encodeToken(accesstoken);
    res.redirect(`${process.env.clientURL}?accesstoken=${token}`);
  } catch (err) {
    res.redirect(`${process.env.clientURL}/404`);
  }
});

module.exports = router;
