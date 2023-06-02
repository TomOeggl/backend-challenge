const router = require("express").Router();
const { checkToken } = require("../middleware/tokenValidation");
const { requireRole } = require("../middleware/roleValidation");
const {
  createUser,
  getUserById,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

router.post("/", requireRole("editor"), createUser);
router.post("/login", login);

router.get("/", getAllUsers);
router.get("/:id", requireRole("self", "admin"), getUserById);

router.patch("/", requireRole("self", "editor"), updateUser);

router.delete("/:id", requireRole("admin"), deleteUser);

module.exports = router;
