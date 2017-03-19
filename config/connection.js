var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "12345",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

connection.on('error', function() {
    // Don't crash.
});

// Export connection for our ORM to use.
module.exports = connection;