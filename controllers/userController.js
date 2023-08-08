const adminModal = require("../models/adminModal");

module.exports = {
  userRegister: async (req, res, next) => {
    // console.log("req---", req.body);
    try {
      let count = 0;
      const { name, email, password } = req.body;
      const created_at = new Date();
      await adminModal
        .registerUser({ name, email, password, created_at })
        .then((data) => {
          if (data.user_id) {
            res.status(200).json({ message: "User registered succesfully" });
          }
        });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({
          status: 3,
          message: error,
        })
        .end();
    }
  },
};
