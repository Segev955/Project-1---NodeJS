const Department = require("../models/departmentModel");

function getAllDepartments() {
  return Department.find();
}

function getDepartmentById(id) {
  return Department.findById(id);
}

function addDepartment(obj) {
  const department = new Department(obj);
  return department.save();
}

function updateDepartment(id, obj) {
  return Department.findByIdAndUpdate(id, obj);
}

function deleteDepartment(id) {
  return Department.findByIdAndDelete(id);
}

module.exports = { getAllDepartments, getDepartmentById, addDepartment, updateDepartment, deleteDepartment };
