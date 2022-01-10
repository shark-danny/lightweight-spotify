const jwt = require("jsonwebtoken");
const SPOTIFY = require("../services/spotify");

module.exports.verifyValidToken = async (req, res, next) => {
  try {
    let token = String(req.headers.authorization).replace("Bearer ", "");
    let decoded = await jwt.verify(token, process.env.secret);
    if (decoded.code) {
      req.code = decoded.code;
      await SPOTIFY.setToken(decoded.code);
      next();
    } else {
      res
        .status(401)
        .send({ message: "you are unauthorized to perform this action" });
    }
  } catch (err) {
    res.status(401).send({
      message: "you are unauthorized to perform this action",
      error: err,
    });
  }
};

module.exports.encodeToken = (code) =>
  jwt.sign(
    {
      code,
    },
    process.env.secret
  );
