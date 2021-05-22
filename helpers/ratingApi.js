var db = require('../models/index');

exports.getWorkersRatings = function (req, res) {
  	db.rating.find()
  	.then(function(users){
  		res.json(users);
  	})
  	.catch(function(err){
  		res.send(err);
  	})
};

exports.createWorkerRating = function(req, res){
	db.rating.create(req.body)
	.then(function(newUser){
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};

exports.getWorkerRatings = function(req, res){
  db.rating.findOne({"workerRated.Phone_no": req.params.phone_no})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};