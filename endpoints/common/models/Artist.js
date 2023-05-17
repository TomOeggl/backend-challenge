const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/sequelize");
const User = require("./User");
const Event = require("./Event");
const LinkCollection = require("./LinkCollection");

const Artist = sequelize.define("Artist", {
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
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

Artist.hasOne(LinkCollection);
Artist.belongsTo(User);
Artist.belongsToMany(Event, { through: "EventArtists" });

module.exports = Artist;
