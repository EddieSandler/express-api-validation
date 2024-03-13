/** Database config for database. */


const { Client } = require("pg");
// const {DB_URI} = require("./config");
let DB_URI

if (process.env.NODE_ENV === "test") {
  DB_URI = "books-test";
} else {
  DB_URI = "books";
}
let db = new Client({
  // connectionString: DB_URI
  host:"/var/run/postgresql",
  database:DB_URI
});

db.connect();


module.exports = db;
