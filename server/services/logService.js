const logRep = require("../repositories/logRep");

function getAllActions() {
  return logRep.getAllActions();
}

async function newAction(action) {
  const actions = await getAllActions();
  
  actions.actions.push(action);
  logRep.newAction(actions);
  return action.id;
}

module.exports = { getAllActions, newAction };
