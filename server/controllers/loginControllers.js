const express = require("express");
const jwt = require("jsonwebtoken");
const userServiceWS = require("../services/usersServicesWS");
const usersService = require("../services/usersService");

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, email } = req.body;
  const auth = await userServiceWS.checkUsername(username, email);
  if (auth.success) {
    const fullName = await userServiceWS.getNamebyUsername(username);

    const users = await usersService.getAllUsers();
    const user = users.find((us) => us.fullName == fullName);

    const SECRET_KEY = "some_key";
    const token = jwt.sign(
      { fullName: fullName, userId: user._id },
      SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );

    res.json({ token, auth });
  } else {
    res.json({ auth });
  }
});

module.exports = router;
