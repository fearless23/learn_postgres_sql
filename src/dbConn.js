const Pool = require("pg").Pool;

const pgURI = `postgres://<USER>:<PASSWORD>@<HOST>/<DB_NAME>`;
const pool = new Pool({
  user: "xprmhupf",
  host: "john.db.elephantsql.com",
  database: "xprmhupf",
  password: "hwvNu172UiT3OJ34Gz_SnaWUbw00dkEU",
  port: 5432
});

module.exports = { pool };
