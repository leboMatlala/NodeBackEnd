var express = require('express'),
app = express(),
bodyParser = require('body-parser');
var session = require('express-session');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodedemo'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route