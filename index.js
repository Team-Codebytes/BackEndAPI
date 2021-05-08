var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models/index');
var commonUserRoute = require('./routes/commonuserRoute');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res){
	res.sendFile("index.html");
});


app.use("/api/commonuser", commonUserRoute);


app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});