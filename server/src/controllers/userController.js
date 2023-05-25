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
      const user = await userService.createUser(req, res);
      if (user) res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Failed to create user" });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await userService.getUserById(req, res);

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
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({
        success: 1,
        data: users,
      });
    } catch (error) {
      console.error("Error during request:", error);
      return res.status(500).json({
        success: 0,
        message: "Failed to retrieve users",
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const updates = req.body;
      const id = updates.id;
      updates.id = undefined;
      const user = await userService.updateUser(id, updates);

      return res.status(200).json({
        success: 1,
        message: "User updated successfully",
        data: user,
      });
    } catch (error) {
      console.error("Error during user update:", error);
      return res.status(500).json({
        success: 0,
        message: error.message,
      });
    }
},
  deleteUser: async (req, res) => {
    try {
      const id = req.body.id;
      await userService.deleteUser(id);

      return res.status(200).json({
        success: 1,
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error("Error during user deletion:", error);
      return res.status(500).json({
        success: 0,
        message: error.message,
      });
    }
},
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);

      const token = sign(
        { userId: user.id, userRoles: user.UserRole },
        process.env.SIGN_KEY,
        {
          expiresIn: "1h",
        }
      );

      return res.status(200).json({
        success: 1,
        message: "Login successful",
        token: token,
      });
    } catch (error) {
      let message = "Failed to login";
      if (
        error.message === "User not found" ||
        error.message === "Invalid password"
      ) {
        message = error.message;
      }
      console.error("Error during login:", error);
      return res.status(401).json({
        success: 0,
        message: message,
      });
    }
  },
};
