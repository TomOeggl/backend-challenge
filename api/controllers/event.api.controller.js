const event = require("../models/event.model");
const generic = require("../../utils/generic.controller.helper");

module.exports = {
  createEvent: (req, res) => {
    event.create(req.body, (err, results) => {
      generic.handleCreate(err, results, res);
    });
  },
  getEvents: (req, res) => {
    event.getAll((err, results) => {
      generic.handleGetAll(err, results, res);
    });
  },
  getEventById: (req, res) => {
    const id = req.params.id;
    event.getById(id, (err, results) => {
      generic.handleGetById(err, results, res);
    });
  },
  updateEvent: (req, res) => {
    event.update(req.body, (err, results) => {
      generic.handleUpdate(err, results, res);
    });
  },
  deleteEvent: (req, res) => {
    event.delete(req.body, (err, results) => {
      generic.handleDelete(err, results, res);
    });
  },
};
