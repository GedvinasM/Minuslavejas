const mysql = require("mysql");

const db = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "minuslavejas",
});

module.exports = db;
