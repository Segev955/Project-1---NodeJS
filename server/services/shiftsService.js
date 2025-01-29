const shiftRep = require("../repositories/shiftsRep");

function getAllShifts() {
  return shiftRep.getAllShifts();
}

function getShiftById(id) {
  return shiftRep.getShiftById(id);
}

function getShiftByEmployeeId(id) {
  return shiftRep.getShiftByEmployeeId(id);
}

function addShift(obj) {
  return shiftRep.addShift(obj);
}

function updateShift(id, obj) {
  return shiftRep.updateShift(id, obj);
}

function deleteShift(id) {
  return shiftRep.deleteShift(id);
}

module.exports = {
  getAllShifts,
  getShiftById,
  getShiftByEmployeeId,
  addShift,
  updateShift,
  deleteShift,
};
