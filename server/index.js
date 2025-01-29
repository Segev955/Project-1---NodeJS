const express = require("express");
const cors = require("cors");

const db = require("./configs/db")
const usersRouter = require("./controllers/usersControllers");
const departmentsRouter = require("./controllers/departmentsControllers");
const employeesRouter = require("./controllers/employeesControllers");
const shiftsRouter = require("./controllers/shiftsControllers");
const loginRouter = require("./controllers/loginControllers");
const verifyRouter = require("./controllers/verifyControllers");
const logRouter = require("./controllers/logControllers");


const app = express();
const PORT = 3000;

db();

app.use(cors());

app.use("/", express.json());
app.use("/users", usersRouter);
app.use("/departments", departmentsRouter);
app.use("/employees", employeesRouter);
app.use("/shifts", shiftsRouter);
app.use("/login", loginRouter);
app.use("/verify", verifyRouter);
app.use("/log", logRouter);

app.listen(PORT, () => {
  console.log(`app is listeting at http://localhost:${PORT}`);
});
