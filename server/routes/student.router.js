const express = require("express");
const router = express.Router();
const {
  userRegister,
  studentLogin,
  userUpdate,
  studentDetails,
} = require("../controllers/userController");
const { validateBody, schemas } = require("../helpers/bodyValidate");
const {
  validateDB,
  validateStudentExistanceInDB,
} = require("../helpers/userDbValidate");
const {
  userAuthenticateMiddleware,
} = require("../helpers/authenticateMiddleware");



router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome to Student route" });
});
router.post(
  "/login",
  validateBody(schemas.userLoginSchema),
  validateStudentExistanceInDB,
  studentLogin
);
router.get("/user-details/:userId", studentDetails);

module.exports = router;
