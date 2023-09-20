const adminModal = require("../models/adminModal");
module.exports = {
  getAllCourses: async (req, res, next) => {
    try {
      await adminModal.getAllCourses().then((data) => {
        if (data) {
          res.status(200).json({
            status: "OK",
            message: "All Courses Fetched Successfully",
            data: data,
          });
        } else {
          res.status(400).json({
            status: "FAILED",
            message: "Issue Fetching Courses",
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: 3, message: error }).end();
    }
  },
  getAllCoursesByUserId: async (req, res, next) => {
    const id = req.params.userId;
    try {
      await adminModal.getAllCoursesByUserId(id).then((data) => {
        if (data.length !== 0) {
          res.status(200).json({
            status: "OK",
            message: "All Courses Fetched Successfully",
            data: data,
          });
        } else {
          res.status(400).json({
            status: "FAILED",
            message: "No course assigned to this user",
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: 3, message: error }).end();
    }
  },
  getAllAssignmentsByUserId: async (req, res, next) => {
    const id = req.params.userId;
    try {
      await adminModal.getAllAssignmentsByUserId(id).then((data) => {
        if (data.length !== 0) {
          res.status(200).json({
            status: "OK",
            message: "All Assignments Fetched Successfully",
            data: data,
          });
        } else {
          res.status(400).json({
            status: "FAILED",
            message: "No assignments found for this user",
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: 3, message: error }).end();
    }
  },
};
