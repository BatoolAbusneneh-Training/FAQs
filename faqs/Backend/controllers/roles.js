const connection = require("../database/db");

const createNewRole = (req, res) => {
  const { roleName } = req.body;
  const query = `INSERT INTO roles (roleName) VALUES (?) `;
  const data = [roleName];
  connection.query(query, data, (err, result) => {
    if (result) {
      res.status(201).json({
        success: true,
        message: "Success role created",
        result: result,
      });
    } else if (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    }
  });
};

module.exports = { createNewRole };
