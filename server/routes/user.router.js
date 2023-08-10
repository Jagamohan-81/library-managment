const express = require("express");
const router = express.Router();
const { userRegister, userLogin } = require("../controllers/userController");
const { validateBody, schemas } = require("../helpers/bodyValidate");
const {
  validateDB,
  validateUserExistanceInDB,
} = require("../helpers/userDbValidate");
const {
  userAuthenticateMiddleware,
} = require("../helpers/authenticateMiddleware");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome to user route" });
});

router.post(
  "/register",
  validateBody(schemas.userRegistraionSchema),
  validateDB,
  userRegister
);
router.post(
  "/login",
  validateBody(schemas.userLoginSchema),
  validateUserExistanceInDB,
  userLogin
);

module.exports = router;
