const { create, getEvents, getEventById, updateEvent, deleteEvent } = require("./event.service");

module.exports = {
  createEvent: (req, res) => {
    create(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        sucess: 1,
        data: results,
      });
    });
  },
  getEvents: (req, res) => {
    getEvents((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getEventById: (req, res) => {
    const id = req.params.id;
    getEventById(id, (err, results) => {
      if (err) {
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Event not found",
        });
      }
      results.password = undefined;
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateEvent: (req, res) => {
    updateEvent(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deleteEvent: (req, res) => {
    deleteEvent(req.body, (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Event deleted successfully",
      });
    });
  },
};
