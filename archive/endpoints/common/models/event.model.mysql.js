const pool = require("../../../../server/src/config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into Event(name, start_time_and_date, end_time_and_date, description, location_id, event_type, ticket_link)
                values(?, ?, ?, ?, ?, ?, ?)`,
      [
        data.name,
        data.startTimeAndDate,
        data.endTimeAndDate,
        data.description,
        data.locationId,
        data.eventType,
        data.ticketLink,
      ],
      handleResponseMultiple(callBack)
    );
  },
  getAll: (callBack) => {
    pool.query(
      `select id, name, start_time_and_date, end_time_and_date, description, location_id, event_type, ticket_link from Event`,
      [],
      handleResponseMultiple(callBack)
    );
  },
  getById: (id, callBack) => {
    pool.query(
      `select name, start_time_and_date, end_time_and_date, description, location_id, event_type, ticket_link from Event where id = ?`,
      [id],
      handleResponseUnique(callBack)
    );
  },
  update: (data, callBack) => {
    pool.query(
      `update Event set name=?, start_time_and_date=?, end_time_and_date=?, description=?, location_id=?, event_type=?, ticket_link=? where id = ?`,
      [
        data.name,
        data.startTimeAndDate,
        data.endTimeAndDate,
        data.description,
        data.locationId,
        data.eventType,
        data.ticketLink,
        data.id,
      ],
      handleResponseMultiple(callBack)
    );
  },
  delete: (data, callBack) => {
    pool.query(
      `delete from Event where id = ?`,
      [data.id],
      handleResponseMultiple(callBack)
    );
  },
  getByIdWithDJs: (id, callBack) => {
    const query = `
      SELECT Event.*, DJ.id AS dj_id, DJ.name AS dj_name,
      DJ.mobile, DJ.tiktok, DJ.spotify, DJ.facebook, DJ.instagram, DJ.promo_link, DJ.soundcloud
      FROM Event
      JOIN Event_DJ ON Event.id = Event_DJ.event_id
      JOIN DJ ON Event_DJ.dj_id = DJ.id
      WHERE Event.id = ?
    `;
    pool.query(query, [id], (error, results) => {
      if (error || results.length === 0) {
        return callBack(error);
      }
      const result = results[0];
      const event = {
        id: result.id,
        name: result.name,
        start_time_and_date: result.start_time_and_date,
        end_time_and_date: result.end_time_and_date,
        description: result.description,
        location_id: result.location_id,
        event_type: result.event_type,
        ticket_link: result.ticket_link,
        djs: [],
      };

      results.forEach((row) => {
        const dj = {
          id: row.dj_id,
          name: row.dj_name,
          social_links: {},
        };

        const socialLinkFields = [
          
          "tiktok",
          "spotify",
          "facebook",
          "instagram",
          "promo_link",
          "soundcloud",
        ];

        socialLinkFields.forEach((field) => {
          if (row[field]) {
            dj.social_links[field] = row[field];
          }
        });

        event.djs.push(dj);
      });

      return callBack(null, event);
    });
  },
};

function handleResponseMultiple(callBack) {
  return (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results);
  };
}

function handleResponseUnique(callBack) {
  return (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results[0]);
  };
}
