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
  getEvents: (callBack) => {
    pool.query(
      `select name, start_time_and_date, end_time_and_date, description, location_id, event_type, ticket_link from Event`,
      [],
      handleResponseMultiple(callBack)
    );
  },
  /*
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      handleResponseUnique(callBack)
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,username,email from registration where id = ?`,
      [id],
      handleResponseUnique(callBack)
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select id,username,email from registration`,
      [],
      handleResponseMultiple(callBack)
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set username=?, email=?, password=? where id = ?`,
      [data.username, data.email, data.password, data.id],
      handleResponseUnique(callBack)
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      handleResponseMultiple(callBack)
    );
  },*/
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
