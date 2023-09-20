const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getAllCoursesByUserId,
  getAllAssignmentsByUserId,
} = require("../controllers/courseController");
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
router.get("/my-course/:userId", getAllCoursesByUserId);
router.get("/my-assignments/:userId", getAllAssignmentsByUserId);

module.exports = router;
