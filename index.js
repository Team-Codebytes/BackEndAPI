var express = require('express');
var app = express();
let port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var db = require('./models/index');
var commonUserRoute = require('./routes/commonuserRoute');
var enterpriceUserRoute = require('./routes/enterpriceUserRoute');
var workersRoute = require('./routes/workersRoute');
var ratingRoute = require('./routes/ratingRoute');
var imageRoute = require('./routes/imageRoute');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));


app.get("/", function(req, res){
	res.sendFile("index.html");
});



app.use("/API/CommonUser", commonUserRoute);
app.use("/API/EnterpriceUser", enterpriceUserRoute);
app.use("/API/Workers", workersRoute);
app.use("/API/Rating", ratingRoute);
app.use("/API/Uploads", imageRoute);



app.listen(port, function () {
  console.log('Example app listening on port '+port+"!");
});