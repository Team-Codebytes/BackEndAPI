var mongoose = require("mongoose");

var profileImgSchema = new mongoose.Schema({
	fileName: {
		type: String
	},
	user_type: {
		type: String
	},
	commonUserImg: {
    	id:{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "commonuser"
    	},
    	Phone_no: Number
    },
    workerImg: {
    	id:{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "worker"
    	},
    	Phone_no: Number
    },
    EnterpiceImg: {
    	id:{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "enterpriceuser"
    	},
    	Email_id: String
    },
	date: {
		type: Date,
		default: Date.now
	}
});

//userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("profileimg", profileImgSchema);