const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/sequelize");

const Event = sequelize.define("Event", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  startDateAndTime: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: {
        msg: "The date field cannot be null.",
      },
    },
  },
  endDateAndTime: {
    type: DataTypes.DATE,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notNull: {
        msg: "The name field cannot be null.",
      },
      notEmpty: {
        msg: "The name field cannot be empty.",
      },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: "The name field cannot be null.",
      },
      notEmpty: {
        msg: "The name field cannot be empty.",
      },
    },
  },
  ticketLink: {
    type: DataTypes.STRING(255),
  },
});

module.exports = Event;
