const express = require("express");
const shiftsService = require("../services/shiftsService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const shifts = await shiftsService.getAllShifts();
    res.json(shifts);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const newShift = await shiftsService.addShift(obj);
    res.json(newShift);
  } catch (error) {
    res.json(error);
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await shiftsService.updateShift(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const shiftId = req.params.id;
    const { employeeIds } = req.body;

    if (!employeeIds) {
      return res.status(400).json({ message: "No employeeIds provided" });
    }

    const updatedShift = await shiftsService.updateShift(shiftId, { employeeIds });
    if (!updatedShift) {
      return res.status(404).json({ message: "Shift not found" });
    }

    res.json(updatedShift);
  } catch (error) {
    res.status(500).json({ message: "Error updating shift", error });
  }
});

module.exports = router;
