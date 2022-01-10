const express = require("express");
const SPOTIFY = require("../services/spotify");
const { verifyValidToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/", verifyValidToken, async (req, res, next) => {
  try {
    const searchValue = req.query.s;
    const results = await SPOTIFY.search(searchValue);
    res.send({ data: results });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
});

module.exports = router;
