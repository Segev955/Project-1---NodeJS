const express = require("express");
const employeesService = require("../services/employeesService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const employees = await employeesService.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params
    const employee = await employeesService.getEmployeeById(id);
    res.json(employee);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const newEmployee = await employeesService.addEmployee(obj);
    res.json(newEmployee);
  } catch (error) {
    res.json(error);
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await employeesService.updateEmployee(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete
router.delete('/:id/', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeesService.deleteEmployee(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const employeeId = req.params.id;
    const { departmentId } = req.body;

    if (!departmentId) {
      return res.status(400).json({ message: "No departmentId provided" });
    }

    const updatedEmployee = await employeesService.updateEmployee(employeeId, { departmentId });
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Shift not found" });
    }

    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error updating employee", error });
  }
});

module.exports = router;
