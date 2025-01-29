const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", (req, res) => {
  const token = req.headers["access-token"];

  if (!token) {
    return res.status(401).json({ success: false, message: "Token missing" });
  }

  const SECRET_KEY = "some_key";

  try {
    const data = jwt.verify(token, SECRET_KEY);
    res.json({ success: true, user: data });
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
});

module.exports = router;

