const express = require('express');
const logService = require('../services/logService');

const router = express.Router();


// Get All Actions
router.get('/', async (req, res) => {
  try {
    const actions = await logService.getAllActions()
    res.json(actions);
  } catch (error) {
    res.json(error);
  }
});

// Add a new Action
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await logService.newAction(obj)
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;