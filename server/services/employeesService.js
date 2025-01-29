const employeeRep = require("../repositories/employeesRep");

function getAllEmployees() {
  return employeeRep.getAllEmployees();
}

function getEmployeeById(id) {
  return employeeRep.getEmployeeById(id);
}

function addEmployee(obj) {
  return employeeRep.addEmployee(obj);
}

function updateEmployee(id, obj) {
  return employeeRep.updateEmployee(id, obj);
}

function deleteEmployee(id) {
  return employeeRep.deleteEmployee(id);
}

module.exports = { getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee };
