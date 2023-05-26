const router = require("express").Router();

const { checkToken } = require("../middleware/tokenValidation");
const { requireAdmin } = require("../middleware/adminValidation");
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent, getEventByIdWithDJs } = require("../controllers/eventController");

router.get("/", getAllEvents);
router.get("/:id", getEventById);

router.post("/",  createEvent);

router.patch("/",  updateEvent);

router.delete("/",  deleteEvent);

module.exports = router;
