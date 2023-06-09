require("dotenv").config();
const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, process.env.SIGN_KEY, (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: "Invalid token",
          });
        } else {
          req.user = decoded;
          req.userRoles = decoded.userRoles;
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied - Unauthorized user",
      });
    }
  },
};
