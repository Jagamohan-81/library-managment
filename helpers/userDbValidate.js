const adminModal = require("../models/adminModal");

module.exports = {
  validateDB: async (req, resp, next) => {
    try {
      const { email } = req.body;
      let userExist = await adminModal.findUserExistance(email);
      if (userExist.success) {
        return resp
          .status(409)
          .json({ status: 3, message: "User already exist" });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      resp.status(400).json({ status: 3, message: error.message });
    }
  },
};
