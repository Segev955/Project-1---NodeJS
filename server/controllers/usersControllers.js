const express = require("express");
const usersService = require("../services/usersService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

//Get by ID
router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params
    const user = await usersService.getUserById(id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const newUser = await usersService.addUser(obj);
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await usersService.updateUser(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
