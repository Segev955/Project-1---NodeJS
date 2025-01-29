const mongoose = require("mongoose");

const departmentsSchema = mongoose.Schema(
  {
    name: String,
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
  { versionKey: false }
);

const Department = mongoose.model("department", departmentsSchema);

module.exports = Department;
