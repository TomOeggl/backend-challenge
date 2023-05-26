const User = require("./User");
const UserRole = require("./UserRole");
const Role = require("./Role");
const Artist = require("./Artist");
const LinkCollection = require("./LinkCollection");
const Location = require("./Location");
const Event = require("./Event");
const EventType = require("./EventType");

function defineAssociations() {
  User.hasMany(Artist);
  Artist.belongsTo(User);

  LinkCollection.belongsTo(Artist);
  Artist.hasOne(LinkCollection);

  User.hasOne(UserRole);
  UserRole.belongsTo(User);
  User.belongsToMany(Role, { through: "UserRoles" });
  Role.belongsToMany(User, { through: "UserRoles" });

  EventType.belongsToMany(Event, { through: "EventEventTypes"})
  Location.belongsToMany(Event, { through: "EventLocations"});
  Event.hasOne(Location);
  Event.hasOne(EventType);
  Event.belongsToMany(Artist, { through: "EventArtists" });
  Artist.belongsToMany(Event, { through: "EventArtists" });
}

module.exports = defineAssociations;
