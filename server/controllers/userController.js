const adminModal = require("../models/adminModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
module.exports = {
  userRegister: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const created_at = new Date();
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      await adminModal
        .userRegisterModal({
          name,
          email,
          password: hashedPassword,
          created_at,
        })
        .then((data) => {
          if (data.user_id) {
            res
              .status(200)
              .json({ status: "OK", message: "User registered successfully" });
          }
        });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: 3, message: error }).end();
    }
  },
  userLogin: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userData = await adminModal.userLoginByEmail(email);
      if (userData) {
        const passwordMatch = await bcrypt.compare(
          password,
          userData.user_password
        );

        if (passwordMatch) {
          const token = jwt.sign(
            {
              userId: userData.user_id,
              userName: userData.user_name,
              role: "user",
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "24h",
            }
          );

          res.status(200).json({
            status: "OK",
            data: { name: userData.user_name, email: userData.user_email },
            message: "Login successful",
            token,
          });
          next();
        } else {
          res.status(401).json({
            status: 4,
            message: "Invalid credentials",
          });
        }
      } else {
        res.status(401).json({ status: 4, message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 4, message: "An error occurred" }).end();
    }
  },
};
