const adminModal = require("../models/adminModal");
module.exports = {
  getAllBooks: async (req, res, next) => {
    try {
      await adminModal.getAllBooks().then((data) => {
        if (data) {
          res.status(200).json({
            status: "OK",
            message: "All Books Fetched Successfully",
            data: data,
          });
        } else {
          res.status(400).json({
            status: "FAILED",
            message: "Issue Fetching Books",
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: 3, message: error }).end();
    }
  },
};
