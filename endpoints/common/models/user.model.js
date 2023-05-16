const pool = require("../../../config/database");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");

module.exports = {
  create: (data, callBack) => {
    const salt = genSaltSync(10);
    data.password = hashSync(data.password, salt);
    pool.query(
      `insert into registration(username, email, password)
                values(?, ?, ?)`,
      [data.username, data.email, data.password],
      handleResponseMultiple(callBack)
    );
  },
  getByEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      handleResponseUnique(callBack)
    );
  },
  getById: (id, callBack) => {
    pool.query(
      `select id,username,email from registration where id = ?`,
      [id],
      handleResponseUnique(callBack)
    );
  },
  getAll: (callBack) => {
    pool.query(
      `select id,username,email from registration`,
      [],
      handleResponseMultiple(callBack)
    );
  },
  update: (data, callBack) => {
    const salt = genSaltSync(10);
    data.password = hashSync(data.password, salt);
    pool.query(
      `update registration set username=?, email=?, password=? where id = ?`,
      [data.username, data.email, data.password, data.id],
      handleResponseUnique(callBack)
    );
  },
  delete: (id, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [id],
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
