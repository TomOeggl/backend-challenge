const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("User", {
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
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: "The email field cannot be null.",
      },
      isEmail: {
        msg: "Please provide a valid email address.",
      },
    },
  },
  password: {
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
});


module.exports = User;
