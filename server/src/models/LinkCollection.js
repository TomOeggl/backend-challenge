const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const LinkCollection = sequelize.define("LinkCollection", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
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



module.exports = LinkCollection;
