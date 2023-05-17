const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/sequelize");
const Artist = require("./Artist");

const LinkCollection = sequelize.define("LinkCollection", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  ArtistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Artist,
      key: "id",
    },
  },
  promoLink: {
    type: DataTypes.STRING(255),
  },
  linktree: {
    type: DataTypes.STRING(255),
  },
  instagramProfileLink: {
    type: DataTypes.STRING(255),
  },
  soundcloudProfileLink: {
    type: DataTypes.STRING(255),
  },
  spotifyProfileLink: {
    type: DataTypes.STRING(255),
  },
  tiktokProfileLink: {
    type: DataTypes.STRING(255),
  },
  facebookProfileLink: {
    type: DataTypes.STRING(255),
  },
  websiteLink: {
    type: DataTypes.STRING(255),
  },
});

LinkCollection.belongsTo(Artist);

module.exports = LinkCollection;
