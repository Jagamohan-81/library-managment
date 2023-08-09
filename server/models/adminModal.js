const db = require("../configuration/dbConn");

module.exports = {
  findUserExistance: async (email) => {
    return new Promise((resolve, reject) => {
      db.any("select * from user_tbl where user_email =($1)", [email])
        .then((data) => {
          if (data.length > 0) {
            resolve({ success: true });
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  registerUser: async (data) => {
    // console.log("data----", data);
    return new Promise((resolve, reject) => {
      db.one(
        "INSERT INTO user_tbl(user_name,user_email,user_password,created_at) VALUES ($1,$2,$3,$4) RETURNING user_id",
        [data.name, data.email, data.password, data.created_at]
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
