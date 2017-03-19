var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "us-cdbr-iron-east-03.cleardb.net",
    user: "b1a14e58566467",
    password: "6fa9d952",
    database: "ad_48f4f6935de18ba"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;