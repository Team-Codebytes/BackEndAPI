var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var workersSchema = new mongoose.Schema({
	username: String,
	password: String,
	address: String,
	email: String,
	phn: String
});

//userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("workers", workersSchema);