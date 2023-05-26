const router = require("express").Router();
const {
  createRole,
  getAllRoles,
  getRoleById,
  assignRoleToUser,
  unassignRoleFromUser,
} = require("../controllers/roleController");
const { requireAdmin } = require("../middleware/adminValidation");

router.post("/", createRole);
router.get("/", getAllRoles);
router.get("/:id", getRoleById);
router.post("/assign", assignRoleToUser);
router.post("/unassign", requireAdmin, unassignRoleFromUser);

module.exports = router;