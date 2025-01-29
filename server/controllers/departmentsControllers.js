const express = require("express");
const departmentsService = require("../services/departmentsService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const departments = await departmentsService.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params
    const department = await departmentsService.getDepartmentById(id);
    res.json(department);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const newDepartment = await departmentsService.addDepartment(obj);
    res.json(newDepartment);
  } catch (error) {
    res.json(error);
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await departmentsService.updateDepartment(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete
router.delete('/:id/', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await departmentsService.deleteDepartment(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});


module.exports = router;
