const eventService = require("../services/eventService");

module.exports = {
  getEventById: async (req, res) => {
    try {
      const event = await eventService.getEventById(req.params.id);
      res.status(200).json({
        success: 1,
        data: event,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Event not found",
      });
    }
  },
  getAllEvents: async (req, res) => {
    try {
      const events = await eventService.getAllEvents();
      res.status(200).json({
        success: 1,
        data: events,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to get events",
      });
    }
  },
  createEvent: async (req, res) => {
    try {
      const event = await eventService.createEvent(req.body);
      res.status(200).json({
        success: 1,
        message: "Event created successfully",
        data: event,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to create event",
      });
    }
  },
  updateEvent: async (req, res) => {
    try {
      const event = await eventService.updateEvent(req.params.id, req.body);
      res.status(200).json({
        success: 1,
        message: "Event updated successfully",
        data: event,
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to update event",
      });
    }
  },
  deleteEvent: async (req, res) => {
    try {
      await eventService.deleteEvent(req.params.id);
      res.status(200).json({
        success: 1,
        message: "Event deleted successfully",
      });
    } catch (error) {
      console.error("Error during request:", error);
      res.status(500).json({
        success: 0,
        message: "Failed to delete event",
      });
    }
  },
};