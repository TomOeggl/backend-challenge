const { checkToken } = require("./tokenValidation");

module.exports = {
  requireEditor(req, res, next) {
    checkToken(req, res, () => {
        console.log(req.user);
      const { isEditor, isAdmin } = req.user.userRoles;

      if (isEditor || isAdmin) {
        next();
      } else {
        res
          .status(403)
          .json({ message: "Unauthorized - Editor Priviliges required" });
      }
    });
  },
};
