const memberService = require('../services/memberService');

module.exports = {
  async getAllMembers(req, res) {
    try {
      const members = await memberService.getAllMembers();
      res.status(200).json({
        success: 1,
        data: members,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to get members",
      });
    }
  },

  async getMemberById(req, res) {
    try {
      const member = await memberService.getMemberById(req.params.id);
      res.status(200).json({
        success: 1,
        data: member,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Member not found",
      });
    }
  },

  async createMember(req, res) {
    try {
      const member = await memberService.createMember(req.body);
      res.status(200).json({
        success: 1,
        message: "Member created successfully",
        data: member,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to create member",
      });
    }
  },

  async updateMember(req, res) {
    try {
      const member = await memberService.updateMember(req.params.id, req.body);
      res.status(200).json({
        success: 1,
        message: "Member updated successfully",
        data: member,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to update member",
      });
    }
  },

  async uploadImage (req, res) {
    try {
      const fileUrl = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
      res.json({ url: fileUrl });
    } catch (error) {
      console.error('Failed to upload image:', error);
      res.status(500).json({
        success: 0,
        message: "Failed to upload image",
      });
    }
  },

  async deleteMember(req, res) {
    try {
      await memberService.deleteMember(req.params.id);
      res.status(200).json({
        success: 1,
        message: "Member deleted successfully",
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to delete member",
      });
    }
  },
};
