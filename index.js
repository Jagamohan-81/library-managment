const express = require("express");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  console.log(req.body);
   res.status(200).json({ data: req.body });
});

app.listen(3000, () => {
  console.log("Hi i am listening at port 3000");
});
