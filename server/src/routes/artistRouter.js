const router = require("express").Router();
const { checkToken } = require("../middleware/tokenValidation");
const { requireRole } = require("../middleware/roleValidation");
const {
  createArtist,
  getArtistById,
  updateArtist,
  deleteArtist,
  getAllArtists,
} = require("../controllers/artistController");

router.post("/", checkToken, createArtist);

router.get("/", checkToken, getAllArtists);
router.get("/:id", requireRole("admin"), getArtistById);

router.patch("/:id", checkToken, requireRole("self", "editor", "admin"), updateArtist);

router.delete("/:id", checkToken, requireRole("admin"), deleteArtist);

module.exports = router;
