'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'nodedemo'
});

connection.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
});

module.exports = connection;