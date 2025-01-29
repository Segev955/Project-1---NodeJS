const departmentRep = require("../repositories/departmentsRep");

function getAllDepartments() {
  return departmentRep.getAllDepartments();
}

function getDepartmentById(id) {
  return departmentRep.getDepartmentById(id);
}

function addDepartment(obj) {
  return departmentRep.addDepartment(obj);
}

function updateDepartment(id, obj) {
  return departmentRep.updateDepartment(id, obj);
}

function deleteDepartment(id) {
  return departmentRep.deleteDepartment(id);
}

module.exports = { getAllDepartments, getDepartmentById, addDepartment, updateDepartment, deleteDepartment };
