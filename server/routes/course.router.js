const express = require("express");
const router = express.Router();
const { getAllCourses } = require("../controllers/courseController");
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

router.get("/get-list", getAllCourses);

module.exports = router;
