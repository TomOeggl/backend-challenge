let tokenBlacklist = [];

module.exports = {
  addToBlacklist: (token) => {
    tokenBlacklist.push(token);
  },
  checkBlacklist: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (tokenBlacklist.includes(token)) {
      res.status(401).json({ message: 'Token is blacklisted' });
    } else {
      next();
    }
  }
};
