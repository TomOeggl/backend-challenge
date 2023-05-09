const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require("./event.controller");
const router = require("express").Router();

const { checkToken } = require("../../auth/token_validation");
const { requireAdmin } = require("../../auth/admin_valitation");

router.get("/", getEvents);
router.get("/:id", getEventById)

router.post("/", requireAdmin, createEvent);

router.patch("/", requireAdmin, updateEvent);

router.delete("/", requireAdmin, deleteEvent)

module.exports = router;
