const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.router");

const app = express();
app.use(express.json());

app.use("/", userRouter);

app.listen(3001, () => {
  console.log("Hi i am listening at port 3001");
});
