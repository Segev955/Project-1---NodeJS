const mongoose = require("mongoose");

const shiftsSchema = mongoose.Schema(
  {
    date: Date,
    startingHour: Number,
    endingHour: Number,
    employeeIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
  },
  { versionKey: false }
);

const Shift = mongoose.model("shift", shiftsSchema);

module.exports = Shift;
