const User = require("../models/User");
const UserRole = require("../models/UserRole");
const { compareSync, genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  getUserById: async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({
      where: { id: id },
      include: [{ model: UserRole }],
    });
    user.password = undefined;
    return user;
  },
  getAllUsers: async () => {
    const users = await User.findAll({
      include: [{ model: UserRole }],
    });
    users.forEach((user) => {
      user.password = undefined;
    });

    return users;
  },
  createUser: async (req, res) => {
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
    return user;
  },
  updateUser: async (id, updates) => {
    const user = await User.findOne({
      where: { id },
      include: [{ model: UserRole }],
    });

    if (!user) {
      throw new Error("User not found");
    }

    return await user.update(updates);
  },
  deleteUser: async (id) => {
    const user = await User.findOne({
      where: { id },
      include: [{ model: UserRole }],
    });

    if (!user) {
      throw new Error("User not found");
    }

    return await user.destroy();
  },
  login: async (email, password) => {
    const user = await User.findOne({
      where: { email },
      include: [{ model: UserRole }],
    });

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    return user;
  },
};
