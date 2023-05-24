const User = require("../models/User");
const UserRole = require("../models/UserRole");
const { compareSync, genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
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

    res.status(200).json({ message: "User created successfully" });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
      include: [{ model: UserRole }],
    });

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
  },
};
