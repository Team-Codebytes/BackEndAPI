var db = require('../models/index');


exports.getEnterpriceUsers = function (req, res) {
	db.enterpriceuser.find()
	.then(function(users){
		res.status(201).json(users);
	})
	.catch(function(err){
		res.send(err);
	})
};

exports.createEnterpriceUser = function(req, res){
	db.enterpriceuser.create(req.body)
	.then(function(newUser){
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};

exports.getEnterpriceUser = function(req, res){
	db.enterpriceuser.findOne({Email_id: req.params.email})
	.then(function(newUser){
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};
