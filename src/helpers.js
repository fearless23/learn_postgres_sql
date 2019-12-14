const { pool } = require("./dbConn");
const wrapper = async function(query, values) {
  try {
    const x = await pool.query(query, values);
    return { data: x.rows, count: x.rowCount };
  } catch (error) {
    // Throw error as standard error, not like below TODO
    throw [500, "PG500", false, error.message];
  }
};

const errRes = (res, err) => {
  res.status(err[0]).json({ msg: err[3], status: false, code: err[1] });
};

const sucRes = (res, data, msg, statusCode = 200) => {
  const r = { data, msg, status: true, code: "S200" };
  if (!data) delete r.data;
  res.status(statusCode).json(r);
};

module.exports = { wrapper, errRes, sucRes };
