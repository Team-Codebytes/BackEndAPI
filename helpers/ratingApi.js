var db = require('../models/index');

// exports.createWorkerRating = function(req, res){
// 	db.rating.create(req.body)
// 	.then(function(newRating){
//     db.rating.findOne({"_id":newRating._id}, function(err, addUser){
//       addUser.commonUserRating.id = req.commonUser.id;
//       addUser.author.username = req.user.username;
//       addUser.save();
//     }) 
//     console.log(newUser)
// 		res.status(201).json(newUser);
// 	})
// 	.catch(function(err){
//   		res.send(err);
//   	})
// };

exports.getWorkerRatings = function(req, res){
  db.rating.findOne({"workerRated.Phone_no": req.body.workerrated.phone_no})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};


exports.updateWorkerRating = function(req, res){
  db.rating.findOne({"workerRated._id": req.body._id}, function(err, newRating){
    newRating.commonUserRating.push({
      "id": req.body.commonUser.id,
      "Phone_no": req.body.commonUser.Phone_no
    })
    newRating.save();
  })
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};


exports.createWorkerRatingV2 = function(req, res){
	db.workers.create(req.body)
	.then(function(newUser){
    console.log(newUser)
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};