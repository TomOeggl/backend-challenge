const router = require("express").Router();
const { checkToken } = require("../../../auth/token_validation");
const { requireAdmin } = require("../../../../server/src/middleware/adminValidation");
const { requireEditor } = require("../../../auth/editor_validation");
const {
  createUser,
  getUserById,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../../../../server/src/controllers/userController");

router.post("/", requireEditor, createUser);
router.post("/login", login);

router.get("/", requireEditor, getAllUsers);
router.get("/:id", requireAdmin, getUserById);

router.patch("/", checkToken, updateUser);

router.delete("/:id", requireAdmin, deleteUser);

module.exports = router;
