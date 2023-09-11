const adminModal = require("../models/adminModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
module.exports = {
  userRegister: async (req, res, next) => {
    try {
      const {
        name,
        roll_no,
        class_name,
        section,
        contact_no,
        profile_pic,
        email,
        password,
        role,
      } = req.body;
      const created_at = new Date();
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      if (role == "A") {
        await adminModal
          .userRegisterModal({
            name,
            email,
            password: hashedPassword,
            role,
            created_at,
          })
          .then((data) => {
            if (data.user_id) {
              res.status(200).json({
                status: "OK",
                message: "User registered successfully",
              });
            }
          });
      } else if (role == "S") {
        await adminModal
          .studentRegisterModel({
            name,
            roll_no,
            class_name,
            section,
            contact_no,
            profile_pic,
            email,
            password: hashedPassword,
            created_at,
          })
          .then((data) => {
            if (data.id) {
              res.status(200).json({
                status: "OK",
                message: "Student registered successfully",
              });
            }
          });
      }
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
              userName: userData.user_name,
              role: userData.user_role,
              id: userData.user_id,
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
  studentLogin: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userData = await adminModal.studentLoginByEmail(email);
      if (userData) {
        const passwordMatch = await bcrypt.compare(password, userData.password);

        if (passwordMatch) {
          const token = jwt.sign(
            {
              userName: userData.name,
              role: "S",
              id: userData.id,
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
  userDetails: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userDetail = await adminModal.getUserDetailsById(userId);
      if (userDetail) {
        res.status(200).json({
          status: "OK",
          data: {
            name: userDetail.user_name,
            email: userDetail.user_email,
            role: userDetail.user_role,
            createdAt: userDetail.created_at,
            profilePic: userDetail.user_profile_pic,
            // password: userDetail.user_password,
          },
          message: "User details retrieved successfully",
        });
        next();
      } else {
        res.status(404).json({
          status: 4,
          message: "User not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: 4, message: "An error occurred" }).end();
    }
  },
  userUpdate: async (req, res, next) => {},
};
