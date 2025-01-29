const userRep = require("../repositories/usersRep");

async function getAllUsers() {
  const users = await userRep.getAllUsers();

  const today = new Date().toISOString().split("T")[0];

  // Check each user for daily reset
  const updatedUsers = await Promise.all(
    users.map(async (user) => {
      const lastActionDate = user.lastActionDate
        ? user.lastActionDate.toISOString().split("T")[0]
        : null;

      if (lastActionDate !== today) {
        user.currentActions = user.numOfActions;
        user.lastActionDate = new Date();

        await userRep.updateUser(user._id, {
          currentActions: user.currentActions,
          lastActionDate: user.lastActionDate,
        });
      }

      return user;
    })
  );

  return updatedUsers;
}

function getUserById(id) {
  return userRep.getUserById(id);
}

function addUser(obj) {
  return userRep.addUser(obj);
}

function updateUser(id, obj) {
  return userRep.updateUser(id, obj);
}

function deleteUser(id) {
  return userRep.deleteUser(id);
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
