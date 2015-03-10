var express = require("express");
var mysql = require("mysql");
var app = express();

var connection  =     mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "root",
	database : "moviewer"
});

connection.connect(function(error) {
	if(error) {
		console.log("Problem with MySQL"+error);
	} else {
		console.log("Connected with Database");
	}
});

app.use(express.session());

app.listen(8888,function() {
	console.log("It's Started on PORT 8888");
});

app.get('/',function(req,res) {
	res.sendfile('index.html');
});

app.get('/load',function(req,res) {
	connection.query("SELECT * from movie-reviews",function(err,rows){
		if(err) {
			console.log("Problem with MySQL"+err);
		} else {
			res.end(JSON.stringify(rows));
		}
	});
});