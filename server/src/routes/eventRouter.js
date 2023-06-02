const router = require("express").Router();

const { checkToken } = require("../middleware/tokenValidation");
const { requireRole } = require("../middleware/roleValidation");
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent, getEventByIdWithDJs } = require("../controllers/eventController");

router.get("/", getAllEvents);
router.get("/:id", getEventById);

router.post("/",  createEvent);

router.patch("/",  updateEvent);

router.delete("/",  deleteEvent);

module.exports = router;
