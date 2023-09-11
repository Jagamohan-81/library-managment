const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.router");
const studentRouter = require("./routes/student.router");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user-auth", userRouter);
app.use("/student", studentRouter);

app.listen(3001, () => {
  console.log("Hi i am listening at port 3001");
});
