const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Content = sequelize.define("Content", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
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
  },
});
