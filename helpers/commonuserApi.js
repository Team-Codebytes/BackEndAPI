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

exports.getLimitedDetailCommonUser = function(req, res){
  db.commonuser.findOne({Email_id: req.params.Email},{Address:0, State:0, City:0, Pincode:0, Phone_no:0})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};

exports.getAllDetailCommonUser = function(req, res){
  db.commonuser.findOne({Email_id: req.params.Email})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};
