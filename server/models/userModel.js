const db = require("../configuration/dbConn");

module.exports = {
  userUpdate: async (data) => {
    return new Promise((resolve, reject) => {
      db.one(
        "INSERT INTO user_tbl(user_name,user_email,user_password,user_role,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING user_id",
        [data.name, data.email, data.password, data.role, data.created_at]
      )
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          console.log(err);
          reject(err);
        });
    });
  },
};
// try {
//     const { userId } = req.params;
//     const { profilePictureUrl, userName, userEmail, userPassword } = req.body;

//     const updates = [];
//     if (profilePictureUrl) {
//       updates.push("profile_picture = $1");
//     }
//     if (userName) {
//       updates.push("user_name = $2");
//     }
//     if (userEmail) {
//       updates.push("user_email = $3");
//     }
//     if (userPassword) {
//       updates.push("user_password = $4");
//     }

//     const updateValues = [
//       profilePictureUrl,
//       userName,
//       userEmail,
//       userPassword,
//       userId,
//     ];
//     const updateQuery = `UPDATE user_tbl SET ${updates.join(
//       ", "
//     )} WHERE user_id = $5`;

//     await db.query(updateQuery, updateValues);

//     res.status(200).json({ message: "User updated successfully" });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while updating the user" });
//   }
