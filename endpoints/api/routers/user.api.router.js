const router = require("express").Router();
const { checkToken } = require("../../../auth/token_validation");
const { requireAdmin } = require("../../../auth/admin_valitation");
const {
  createUser,
  getUserById,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/user.api.controller");

router.post("/", checkToken, createUser);
router.post("/login", login);

router.get("/", getAllUsers);
router.get("/:id", requireAdmin, getUserById);

router.patch("/", checkToken, updateUser);

router.delete("/", requireAdmin, deleteUser);

module.exports = router;
