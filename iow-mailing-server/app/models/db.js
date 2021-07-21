const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const MAX_ROWS = 1000;
const DEFAULT_ROW_NUMBER = 100;

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;