const mongoose = require("mongoose");

const dbURI = "mongodb://127.0.0.1:27017/factoryDB";

async function connectDB() {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to factoryDB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
