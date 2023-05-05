const {
  createUser,
  getUsers,
  getUserByUserId,
  login,
  updateUser,
  deleteUser,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.post("/login", login);

router.get("/", getUsers);
router.get("/:id", checkToken, getUserByUserId);

router.patch("/", checkToken, updateUser);

router.delete("/", checkToken, deleteUser);

module.exports = router;
