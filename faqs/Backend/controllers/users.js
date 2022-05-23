const connection = require("../database/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createNewUser = async (req, res) => {
  const { firstName, lastName, country, email, passworrd, role_id } = req.body;
  let newPassword = passworrd.toString();
  const hashing = await bcrypt.hash(newPassword, saltRounds);
  const query = `INSERT INTO users (firstName, lastName, country, email, passworrd, role_id) VALUES (?,?,?,?,?,?);`;
  const data = [firstName, lastName, country, email, hashing, role_id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        message: "The email already exists",
        err: err,
      });
    }
    res.status(201).json({
      success: true,
      message: `Success User Added`,
      result: result,
    });
  });
};
const getAllUsers = (req, res) => {
  const query = `SELECT * FROM users  WHERE users.is_deleted=0  `;

  connection.query(query, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    if (!result[0]) {
      return res.status(200).json({
        success: false,
        message: `no user yet`,
      });
    }
    res.status(200).json({
      success: true,
      message: `all users`,
      result: result,
    });
  });
};

module.exports = { createNewUser, getAllUsers };
