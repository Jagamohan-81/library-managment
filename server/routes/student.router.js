const express = require("express");
const router = express.Router();
const {
  userRegister,
  studentLogin,
  userUpdate,
  userDetails,
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

// router.post(
//   "/register",
//   validateBody(schemas.userRegistraionSchema),
//   validateDB,
//   userRegister
// );
router.post(
  "/login",
  validateBody(schemas.userLoginSchema),
  validateStudentExistanceInDB,
  studentLogin
);
router.get("/user-details/:userId", userDetails);
// router.post("/upload/:Id",userAuthenticateMiddleware, userUpdate);

module.exports = router;
