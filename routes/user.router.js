const express = require("express");
const router = express.Router();
const { userRegister } = require("../controllers/userController");
const { validateBody, schemas } = require("../helpers/bodyValidate");
const { validateDB } = require("../helpers/userDbValidate");

router.post(
  "/",
  validateBody(schemas.userRegistraionSchema),
  validateDB,
  userRegister
);

module.exports = router;
