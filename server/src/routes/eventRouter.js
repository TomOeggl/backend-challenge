const router = require("express").Router();

const { checkToken } = require("../middleware/tokenValidation");
const { requireRole } = require("../middleware/roleValidation");
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent, uploadImage, getEventByIdWithDJs, getAllPublicEvents } = require("../controllers/eventController");
const uploadService = require('../services/uploadService');

router.get("/", getAllEvents);
router.get("/public/", getAllPublicEvents)
router.get("/:id", getEventById);

router.post("/",  createEvent);
router.post('/upload', uploadService.single('image'), uploadImage);

router.patch("/:id",  updateEvent);

router.delete("/:id", requireRole("admin"),  deleteEvent);

module.exports = router;
