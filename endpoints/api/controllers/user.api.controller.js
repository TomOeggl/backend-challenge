require("dotenv").config();
const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const user = require("../../common/models/user.model");
const generic = require("../../common/utils/generic.controller.helper");

module.exports = {
  createUser: (req, res) => {
    user.create(req.body, (err, results) => {
      generic.handleCreate(err, results, res);
    });
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    user.getById(id, (err, results) => {
      generic.handleGetById(err, results, res);
    });
  },
  getAllUsers: (req, res) => {
    user.getAll((err, results) => {
      generic.handleGetAll(err, results, res);
    });
  },
  updateUser: (req, res) => {
    user.update(req.body, (err, results) => {
      generic.handleUpdate(err, results, res);
    });
  },
  deleteUser: (req, res) => {
    user.delete(req.body, (err, results) => {
      generic.handleDelete(err, results, res);
    });
  },
  login: (req, res) => {
    const body = req.body;
    user.getByEmail(body.email, (err, results) => {
      if (err) { 
        console.log(err);
      }
      if (!results) {
        return res.status(401).json({
          success: 0,
          data: "Invalid email or password",
        });
      } 
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.SIGN_KEY, {
          expiresIn: "1h",
        });
        return res.status(200).json({
          success: 1,
          message: "Login sucessful",
          token: jsontoken,
        });
      } else {
        return res.status(401).json({
          success: 0,
          data: "Invalid password or email",
        });
      }
    });
  },
};
