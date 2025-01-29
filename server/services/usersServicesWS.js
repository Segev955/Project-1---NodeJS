const { use } = require("../controllers/usersControllers");
const userRep = require("../repositories/usersRepWS");

function getAllUsers() {
  const { data } = userRep.getAllUsers();
  return data;
}

async function getNamebyUsername(username) {
  const { data } = await userRep.getAllUsers();
  const user = data.find((item) => item.username == username);
  return user.name;
}

async function checkUsername(username, email) {
  const { data } = await userRep.getAllUsers();
  const user = data.find((item) => item.username == username);
  if (!user) 
    return { success: false, msg: "Username not found" };
  else if (user.email == email)
    return { success: true, msg: "User authenticated successfully" };
  else 
    return { success: false, msg: "Wrong Email" };
}

module.exports = { getAllUsers, checkUsername, getNamebyUsername };
