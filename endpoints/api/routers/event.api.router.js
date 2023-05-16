const router = require("express").Router();

const { checkToken } = require("../../../auth/token_validation");
const { requireAdmin } = require("../../../auth/admin_valitation");
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent, getEventByIdWithDJs } = require("../controllers/event.api.controller");

router.get("/", getEvents);
router.get("/:id", getEventById);
router.get("/full/:id", getEventByIdWithDJs);

router.post("/", requireAdmin, createEvent);

router.patch("/", requireAdmin, updateEvent);

router.delete("/", requireAdmin, deleteEvent);

module.exports = router;
