//This is the connction to the burger dataase
var mysql = require("mysql");

var connection;

if ('mysql://wj4t91jrhtjzoq7h:slvubdjb8np6iwc9@qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gre63iphc26rhmsp') {
  connection = mysql.createConnection('mysql://wj4t91jrhtjzoq7h:slvubdjb8np6iwc9@qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gre63iphc26rhmsp');
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'burger_db'
    });
  };

// = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exports connection to orm.js
module.exports = connection;