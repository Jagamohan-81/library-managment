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
    try {
      await adminModal.getAllCoursesByUserId().then((data) => {
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
};
