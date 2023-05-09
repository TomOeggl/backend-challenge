const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into Event(name, start_time_and_date, end_time_and_date, description, location_id, event_type, ticket_link)
                values(?, ?, ?, ?, ?, ?, ?)`,
      [data.name, data.startTimeAndDate, data.endTimeAndDate, data.description, data.locationId, data.eventType, data.ticketLink],
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
      [data.name, data.startTimeAndDate, data.endTimeAndDate, data.description, data.locationId, data.eventType, data.ticketLink, data.id],
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
