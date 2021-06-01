var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var workersSchema = new mongoose.Schema({
	FirstName: {
		type: String,
		require: "FirstName cannot be blank"
	},
	LastName: {
		type: String,
		require: "LastName cannot be blank"
	},
	Email_id: {
		type: String
	},
	Password: {
		type: String,
		require: "Password cannot be blank"
	},
	Work_Category:{
		type: String,
		require: "Work Category cannot be blank"
	},
	Experience: {
		type: String,
		require: "Experience cannot be blank"
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
		type: String,
		require: "Pincode cannot be blank"
	},
	Phone_no: {
		type: String,
		require: "Phone number cannot be blank"
	},
	Aadhar_Card: {
		type: String,
		require: "Aadhar_Card number cannot be blank"
	},
	Comments: [{
    	id: String,
		Name: String,
    	user_type: String,
		Text: String,
		default: ""
    }],
	user_type:{
		type: String,
		default: 'worker'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

//userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("worker", workersSchema);