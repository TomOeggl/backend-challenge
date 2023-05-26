const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
});

module.exports = Role;