const express = require("express");
const search = require("./search");
const auth = require("./auth");

const router = express.Router();

router.use("/search", search);
router.use("/auth", auth);

module.exports = router;