const User = require("../models/usersModel");

function getAllUsers() {
  return User.find();
}

function getUserById(id) {
  return User.findById(id);
}

function addUser(obj) {
  const user = new User(obj);
  return user.save();
}

function updateUser(id, obj) {
  return User.findByIdAndUpdate(id, obj, { new: true });
}

function deleteUser(id) {
  return User.findByIdAndDelete(id);
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
