const router = require("express").Router();

const { checkToken } = require("../middleware/tokenValidation");
const { requireAdmin } = require("../middleware/adminValidation");
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent, getEventByIdWithDJs } = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/:id", getEventById);
router.get("/full/:id", getEventByIdWithDJs);

router.post("/", requireAdmin, createEvent);

router.patch("/", requireAdmin, updateEvent);

router.delete("/", requireAdmin, deleteEvent);

module.exports = router;
