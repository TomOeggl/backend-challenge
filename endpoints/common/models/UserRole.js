const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/sequelize");
const User = require("./User");

const UserRole = sequelize.define("UserRole", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  isEditor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

UserRole.belongsTo(User);

module.exports = UserRole;
