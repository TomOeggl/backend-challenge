const {
  createUser,
  getUsers,
  getUserByUserId,
  login,
  updateUser,
  deleteUser,
  signUp,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { requireAdmin } = require("../../auth/admin_valitation")

router.post("/", checkToken, createUser);
router.post("/login", login);

router.get("/", getUsers);
router.get("/:id", requireAdmin, getUserByUserId);

router.patch("/", checkToken, updateUser);

router.delete("/", requireAdmin, deleteUser);

module.exports = router;
