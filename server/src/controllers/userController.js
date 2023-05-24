require("dotenv").config();
const { compareSync, genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const User = require("../models/User");
const UserRole = require("../models/UserRole");
const userService = require("../services/userService");
const generic = require("../../../archive/endpoints/common/utils/generic.controller.helper");

module.exports = {
  createUser: async (req, res) => {
    try {
      await userService.createUser(req, res);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Failed to create user" });
    }
  },
  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findOne({
        where: { id: id },
        include: [{ model: UserRole }],
      });
      res.status(200).json({
        success: 1,
        data: user,
      });
    } catch (error) {
      console.error("Error during request:", error);
      return res.status(500).json({
        success: 0,
        message: "User not found",
      });
    }
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
    const id = req.params.id;
    user.delete(id, (err, results) => {
      generic.handleDelete(err, results, res);
    });
  },
  login: async (req, res) => {
    try {
      await userService.login(req, res);
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({
        success: 0,
        message: "Failed to login",
      });
    }
  },
};
