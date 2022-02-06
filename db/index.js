const mysql = require("mysql");
const host = "localhost";
require('dotenv').config()

module.exports = {
  connection: mysql.createConnection({
    host: host,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "todoit",
  }),
};