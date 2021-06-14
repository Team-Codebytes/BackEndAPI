var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var enterpriceuserSchema = new mongoose.Schema({
	CompanyName: {
		type: String,
		require: "CompanyName cannot be blank"
	},
	Email_id: {
		type: String,
		require: "Email id cannot be blank"
	},
	Password: {
		type: String,
		require: "Password cannot be blank"
	},
	Address: {
		type: String,
		require: "Address cannot be blank"
	},
	State: {
		type: String,
		require: "State cannot be blank"
	},
	City: {
		type: String,
		require: "City cannot be blank"
	},
	Pincode: {
		type: Number,
		require: "Pincode cannot be blank"
	},
	Phone_no: {
		type: Number,
		require: "Phone number cannot be blank"
	},
	user_type:{
		type: String,
		default: 'enterpriceuser'
	},
	date: {
		type: Date,
		default: Date.now
	},
	Profileimg: {
		type: String
	},
	Aadharimg: {
		type: String
	}
});

//userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("enterpriceuser", enterpriceuserSchema);