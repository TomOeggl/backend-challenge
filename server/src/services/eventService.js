const Event = require("../models/Event");
const EventType = require("../models/EventType");
const Location = require("../models/Location");
const Artist = require("../models/Artist");

module.exports = {
  getEventById: async (id) => {
    const event = await Event.findOne({
      where: { id },
      include: [
        { model: EventType },
        { model: Location },
        { model: Artist },
      ],
    });

    if (!event) {
      throw new Error("Event not found");
    }

    return event;
  },
  getAllEvents: async () => {
    const events = await Event.findAll({
      include: [
        { model: EventType },
        { model: Location },
        { model: Artist },
      ],
    });

    return events;
  },
  getAllPublicEvents: async () => {
    const events = await Event.findAll({
      where: {
        published: true
      },
      include: [
        { model: EventType },
        { model: Location },
        { model: Artist },
      ],
    });
  
    return events;
  },  
  createEvent: async (eventData) => {
    const { eventTypeId, locationId, artistIds, ...rest } = eventData;
    const event = await Event.create(rest);

    if (eventTypeId) {
      const eventType = await EventType.findByPk(eventTypeId);
      if (!eventType) {
        throw new Error("EventType not found");
      }
      await event.setEventType(eventType);
    }
  
    if (locationId) {
      const location = await Location.findByPk(locationId);
      if (!location) {
        throw new Error("Location not found");
      }
      await event.setLocation(location);
    }
  
    if (artistIds) {
      const artists = await Artist.findAll({ where: { id: artistIds } });
      if (artists.length !== artistIds.length) {
        throw new Error("One or more Artists not found");
      }
      await event.setArtists(artists);
    }

    return event;
  },
  updateEvent: async (id, updates) => {
    const event = await Event.findOne({
      where: { id },
      include: [
        { model: EventType },
        { model: Location },
        { model: Artist },
      ],
    });

    if (!event) {
      throw new Error("Event not found");
    }

    return await event.update(updates);
  },
  deleteEvent: async (id) => {
    const event = await Event.findOne({
      where: { id },
      include: [
        { model: EventType },
        { model: Location },
        { model: Artist },
      ],
    });

    if (!event) {
      throw new Error("Event not found");
    }

    return await event.destroy();
  },
};