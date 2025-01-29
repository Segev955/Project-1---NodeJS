const mongoose = require("mongoose");

const employeesSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    startWorkYear: Number,
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
  },
  { versionKey: false }
);

const Employee = mongoose.model("employee", employeesSchema);

module.exports = Employee;
