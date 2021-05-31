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
  console.log(req.body);
  db.rating.findOne({"workerRated.id": req.body.workerRated.id}, function(err, newRating){
    if(req.body.Star1 != null)
      newRating.Star1 = req.body.Star1;
    if(req.body.Star2 != null)
      newRating.Star2 = req.body.Star2;
    if(req.body.Star3 != null)  
      newRating.Star3 = req.body.Star3;
    if(req.body.Star4 != null)
      newRating.Star4 = req.body.Star4;
    if(req.body.Star5 != null)
      newRating.Star5 = req.body.Star5;
    if(req.body.Star1 != null)
      newRating.Avg = req.body.Avg;
    newRating.Total = req.body.Total;
    if(req.body.user === "commonuser"){
      newRating.commonUserRating.push({
        "id": req.body.id,
        "Phone_no": req.body.Phone_no
      })
    }else if(req.body.user === "enterpriceuser"){
      newRating.EnterpiceRating.push({
        "id": req.body.id,
        "Email_id": req.body.Email_id
      })
    }
    newRating.save();
    console.log(newRating);
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