const Shift = require("../models/shiftModel");

function getAllShifts() {
  return Shift.find();
}

function getShiftById(id) {
  return Shift.findById(id);
}

function getShiftByEmployeeId(id) {
  return Shift.find({ employeeIds: ObjectId(id) });
}

function addShift(obj) {
  const shift = new Shift(obj);
  return shift.save();
}

function updateShift(id, obj) {
  return Shift.findByIdAndUpdate(id, { $set: obj }, { new: true });
}

function deleteShift(id) {
  return Shift.findByIdAndDelete(id);
}

module.exports = {
  getAllShifts,
  getShiftById,
  getShiftByEmployeeId,
  addShift,
  updateShift,
  deleteShift,
};
