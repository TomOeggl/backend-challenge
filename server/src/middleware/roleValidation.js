const { checkToken } = require("./tokenValidation");

module.exports = {
  requireRole: (...roles) => {
    return function (req, res, next) {
      checkToken(req, res, () => {
        const { roles: roles, id: userIdFromToken } = req.user;
        const userIdFromParams = req.params.id;

        if (roles.includes("self") && userIdFromParams == userIdFromToken) {
          return next();
        }

        if (roles.some((role) => roles.includes(role))) {
          next();
        } else {
          res.status(403).json({
            message: `Unauthorized - One of the following roles required: ${roles.join(
              ", "
            )}`,
          });
        }
      });
    };
  },
};
