var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");

var ratingSchema = new mongoose.Schema({
	Star1: {
		type: Number
	},
	Star2: {
		type: Number
	},
	Star3: {
		type: Number
	},
	Star4: {
		type: Number
	},
	Star5: {
		type: Number
	},
	Avg: {
		type: Number
	},
	Total: {
		type: Number
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