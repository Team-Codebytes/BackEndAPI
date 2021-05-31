var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var ratingSchema = new mongoose.Schema({
	Star1: {
		type: Number,
		default: 0
	},
	Star2: {
		type: Number,
		default: 0
	},
	Star3: {
		type: Number,
		default: 0
	},
	Star4: {
		type: Number,
		default: 0
	},
	Star5: {
		type: Number,
		default: 0
	},
	Avg: {
		type: Number,
		default: 0
	},
	Total: {
		type: Number,
		default: 0
	},
	commonUserRating: [{
    	id:{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "commonuser"
    	},
    	Phone_no: Number
    }],
    workerRated: {
    	id:{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "worker"
    	},
    	Phone_no: Number
    },
    EnterpiceRating: [{
    	id:{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "enterpriceuser"
    	},
    	Email_id: String
    }]

});

//userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("rating", ratingSchema);