var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "example",
});

connection.connect();

connection.query(
  "SELECT 1 + 1 AS solution",
  function (error, results, _fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  }
);

connection.end();
