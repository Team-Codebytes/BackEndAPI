var db = require('../models/index');


exports.getCommonUsers = function (req, res) {
  	db.commonuser.find()
  	.then(function(users){
  		res.json(users);
  	})
  	.catch(function(err){
  		res.send(err);
  	})
};

exports.createCommonUser = function(req, res){
	db.commonuser.create(req.body)
	.then(function(newUser){
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};
