const jf = require('jsonfile');

const FILE = 'data/log.json';

function getAllActions ()  {
  return jf.readFile(FILE);
};

function newAction (actions) {
    jf.writeFile(FILE, actions)
}

module.exports = { getAllActions, newAction };