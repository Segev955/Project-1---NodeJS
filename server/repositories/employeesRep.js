const Employee = require("../models/employeeModel");

function getAllEmployees() {
  return Employee.find();
}

function getEmployeeById(id) {
  return Employee.findById(id);
}

function addEmployee(obj) {
  const employee = new Employee(obj);
  return employee.save();
}

function updateEmployee(id, obj) {
  return Employee.findByIdAndUpdate(id, { $set: obj }, { new: true });
}

function deleteEmployee(id) {
  return Employee.findByIdAndDelete(id);
}

module.exports = { getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee };
