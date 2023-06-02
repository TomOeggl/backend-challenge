const router = require("express").Router();
const {
  createRole,
  getAllRoles,
  getRoleById,
  assignRoleToUser,
  unassignRoleFromUser,
} = require("../controllers/roleController");
const { requireRole } = require("../middleware/roleValidation");

router.post("/", requireRole("admin"), createRole);
router.get("/", requireRole("admin"), getAllRoles);
router.get("/:id", requireRole("admin"), getRoleById);
router.post("/assign", requireRole("admin"), assignRoleToUser);
router.post("/unassign", requireRole("admin"), unassignRoleFromUser);

module.exports = router;