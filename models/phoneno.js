var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var phonenoSchema = new mongoose.Schema({
	Phone_no: {
		type: Number
	}
});

//userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("phoneno", phonenoSchema);