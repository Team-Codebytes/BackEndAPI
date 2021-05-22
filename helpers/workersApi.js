var db = require('../models/index');

exports.getWorkers = function (req, res) {
  	db.workers.find()
  	.then(function(users){
  		res.json(users);
  	})
  	.catch(function(err){
  		res.send(err);
  	})
};

exports.createWorker = function(req, res){
	db.workers.create(req.body)
	.then(function(newUser){
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};

exports.getLimitedDetailWorker = function(req, res){
  db.workers.findOne({Phone_no: req.params.phone_no},{Address:0, State:0, City:0, Pincode:0, Phone_no:0})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};

exports.getAllDetailWorker = function(req, res){
  db.workers.findOne({Phone_no: req.params.phone_no})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};