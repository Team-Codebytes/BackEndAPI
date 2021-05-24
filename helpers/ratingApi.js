var db = require('../models/index');

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
  db.rating.findOne({"workerRated.Phone_no": req.body.workerrated.phone_no})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};