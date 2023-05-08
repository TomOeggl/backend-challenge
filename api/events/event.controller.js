const { create, getEvents } = require("./event.service");

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
};
