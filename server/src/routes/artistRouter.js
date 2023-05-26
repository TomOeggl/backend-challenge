const router = require("express").Router();
const { checkToken } = require("../middleware/tokenValidation");
const { requireAdmin } = require("../middleware/adminValidation");
const { requireEditor } = require("../middleware/editorValidation");
const {
  createArtist,
  getArtistById,
  updateArtist,
  deleteArtist,
  getAllArtists,
} = require("../controllers/artistController");

router.post("/", checkToken, requireEditor, createArtist);

router.get("/", requireEditor, getAllArtists);
router.get("/:id", requireAdmin, getArtistById);

router.patch("/:id", checkToken, requireEditor, updateArtist);

router.delete("/:id", checkToken, requireAdmin, deleteArtist);

module.exports = router;
