const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/sequelize");
const Event = require("./Event");

const Location = sequelize.define("Location", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
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
  address: {
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
  comment: {
    type: DataTypes.STRING(255),
  },
});

Location.BelongsToMany(Event);

module.exports = Location;
