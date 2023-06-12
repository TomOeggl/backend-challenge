const express = require('express');
const memberController = require('../controllers/memberController');
const uploadService = require('../services/uploadService');
const { requireRole } = require("../middleware/roleValidation");
const router = express.Router();

router.get('/', memberController.getAllMembers);
router.get('/:id', memberController.getMemberById);
router.post('/upload', uploadService.single('image'), memberController.uploadImage);
router.post('/', requireRole( "editor", "admin"), memberController.createMember);
router.put('/:id', memberController.updateMember);
router.delete('/:id', requireRole( "editor", "admin"), memberController.deleteMember);

module.exports = router;
