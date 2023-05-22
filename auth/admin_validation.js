const { checkToken } = require("./token_validation");

module.exports = {
  requireAdmin(req, res, next) {
    checkToken(req, res, () => {
      const { isAdmin } = req.user.userRoles;
      console.log(req.user);
      if (isAdmin) {
        next();
      } else {
        res.status(403).json({ message: "Unauthorized - Admin Priviliges required" });
      }
    });
  },
}
