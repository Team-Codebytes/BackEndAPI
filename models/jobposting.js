var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var jobPostSchema = new mongoose.Schema({
	Job_Title: {
		type: String
	},
	Work_Category: {
		type: String
	},
	Experience_Level: {
		type: String
	},
	Salary_Range: {
		type: String
	},
	Vacancies: {
		type: Number
	},
	Job_desc: {
		type: String
	},
    commonUser: {
    	id:{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "commonuser"
    	},
    	Phone_no: Number,
		Name: String
    },
	State: {
		type: String
	},
	City: {
		type: String
	},
	Address:{
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

//userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("jobposting", jobPostSchema);