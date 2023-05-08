const { checkToken } = require("./token_validation");

module.exports = {
  requireAdmin(req, res, next) {
    checkToken(req, res, () => {
      const { isAdmin } = req.user.result;
      
      if (isAdmin === 1) {

        next();
      } else {
        res.status(403).json({ message: "Unauthorized" });
      }
    });
  },
};
