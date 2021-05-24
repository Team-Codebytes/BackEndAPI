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
  db.commonuser.findOne({Phone_no: req.body.phone_no, Password: req.body.password},{Address:0, State:0, City:0, Pincode:0, Aadhar_Card:0})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};

exports.getAllDetailCommonUser = function(req, res){
  db.commonuser.findOne({Phone_no: req.body.phone_no})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};
