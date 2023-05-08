const { createEvent, getEvents } = require("./event.controller");
const router = require("express").Router();

const { checkToken } = require("../../auth/token_validation");
const { requireAdmin } = require("../../auth/admin_valitation");

router.get("/", getEvents)

router.post("/", requireAdmin, createEvent);

module.exports = router;
