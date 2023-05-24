require("dotenv").config();
const { compareSync, genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const User = require("../models/User");
const UserRole = require("../models/UserRole");
const generic = require("../../../archive/endpoints/common/utils/generic.controller.helper");

module.exports = {
  createUser: async (req, res) => {
    try {
      let { name, email, password } = req.body;
      const salt = genSaltSync(10);
      password = hashSync(password, salt);

      const user = await User.create({
        name: name,
        email: email,
        password: password,
      });

      await UserRole.create({
        UserId: user.id,
      });

      res.status(200).json({ message: "User created successfully" });
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
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { email: email },
        include: [{ model: UserRole }],
      });

      if (!user) {
        return res.status(401).json({
          success: 0,
          message: "Invalid email or password",
        });
      }

      const passwordMatch = compareSync(password, user.password);

      if (passwordMatch) {
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
      } else {
        return res.status(401).json({
          success: 0,
          message: "Invalid email or password",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({
        success: 0,
        message: "Failed to login",
      });
    }
  },
};
