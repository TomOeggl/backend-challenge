const router = require("express").Router();
const { checkToken } = require("../middleware/tokenValidation");
const { requireAdmin } = require("../middleware/adminValidation");
const { requireEditor } = require("../middleware/editorValidation");
const {
  createUser,
  getUserById,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

router.post("/", requireEditor, createUser);
router.post("/login", login);

router.get("/", requireEditor, getAllUsers);
router.get("/:id", requireAdmin, getUserById);

router.patch("/", checkToken, updateUser);

router.delete("/:id", requireAdmin, deleteUser);

module.exports = router;
