const artistService = require('../services/artistService');

module.exports = {
  getArtistById: async (req, res) => {
    try {
      const artist = await artistService.getArtistById(req.params.id);
      res.status(200).json({
        success: 1,
        data: artist
      });
    } catch (error) {
      console.error("Error during request:", error);
      return res.status(500).json({
        success: 0,
        message: "Artist not found",
      });
    }
  },

  getAllArtists: async (req, res) => {
    try {
      const artists = await artistService.getAllArtists();
      res.status(200).json({
        success: 1,
        data: artists
      });
    } catch (error) {
      console.error("Error during request:", error);
      return res.status(500).json({
        success: 0,
        message: "Failed to fetch artists",
      });
    }
  },

  createArtist: async (req, res) => {
    try {
      const artist = await artistService.createArtist(req.body, req.user.id);
      res.status(201).json({
        success: 1,
        data: artist,
        message: 'Artist created successfully'
      });
    } catch (error) {
      console.error("Error during request:", error);
      return res.status(500).json({
        success: 0,
        message: "Failed to create artist",
      });
    }
  },

  updateArtist: async (req, res) => {
    try {
      const artist = await artistService.updateArtist(req.params.id, req.body);
      res.status(200).json({
        success: 1,
        data: artist,
        message: 'Artist updated successfully'
      });
    } catch (error) {
      console.error("Error during request:", error);
      return res.status(500).json({
        success: 0,
        message: "Failed to update artist",
      });
    }
  },

  deleteArtist: async (req, res) => {
    try {
      await artistService.deleteArtist(req.params.id);
      res.status(200).json({
        success: 1,
        message: 'Artist deleted successfully'
      });
    } catch (error) {
      console.error("Error during request:", error);
      return res.status(500).json({
        success: 0,
        message: "Failed to delete artist",
      });
    }
  },
};