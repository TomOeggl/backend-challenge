const User = require("../models/User");
const Role = require("../models/Role");
const { compareSync, genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  getUserById: async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({
      where: { id: id },
      include: [{ model: Role }],
    });
    //user.password = undefined;
    return user;
  },
  getAllUsers: async () => {
    const users = await User.findAll({
      include: [{ model: Role }],
    });
    users.forEach((user) => {
      user.password = undefined;
    });

    return users;
  },
  createUser: async (req, res) => {
    let { name, email, password, roles } = req.body;
    const salt = genSaltSync(10);
    password = hashSync(password, salt);
  
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
  
    if (roles && roles.length > 0) {
      const foundRoles = await Role.findAll({ 
          where: { 
              name: roles
          } 
      });
  
      for (const role of foundRoles) {
        await user.addRole(role);
      }
    }
  
    return user;
  },
  updateUser: async (id, updates) => {
    const user = await User.findOne({
      where: { id },
      include: [{ model: Role }],
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
      include: [{ model: Role }],
    });

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    user.password = undefined;

    const roles = user.Roles.map((role) => role.name);

    const token = sign(
      { userId: user.id, roles: roles },
      process.env.SIGN_KEY,
      {
        expiresIn: "1h",
      }
    );

    console.log(token);

    return { user, token };
  },
};
