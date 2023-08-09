const express = require("express");
const router = express.Router();
const { userRegister } = require("../controllers/userController");
const { validateBody, schemas } = require("../helpers/bodyValidate");
const { validateDB } = require("../helpers/userDbValidate");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome to user route" });
});

router.post(
  "/register",
  validateBody(schemas.userRegistraionSchema),
  validateDB,
  userRegister
);

module.exports = router;
