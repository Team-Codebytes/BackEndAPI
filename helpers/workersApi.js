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
  db.phoneno.findOne({Phone_no: req.body.Phone_no})
  .then(function(isPhone_no){
    console.log(isPhone_no)
    if(isPhone_no == null ){
      db.workers.create(req.body)
      .then(function(newUser){
        let worker = {
          "workerRated" :{
            "id" : newUser._id,
            "Phone_no" : newUser.Phone_no
          }
        }
        let phone = {
          "Phone_no" : newUser.Phone_no
        }
        db.phoneno.create(phone)
        .then(function(newPhone_no){
          console.log(newPhone_no)
        })
        .catch(function(err){
					res.send(err);
				})
        db.rating.create(worker)
        .then(function(newRating){
          console.log(newRating)
          .then(function(newWorkerAdded){
            console.log(newWorkerAdded)
          })
        })
        .catch(function(err){
					res.send(err);
				})
        res.status(201).json(newUser);
      })
    }else{
      res.status(200).json({
        success: false,
        message: "Phone Number Exist use Another Phone Number"
      });
    }
  })
	.catch(function(err){
  	res.send(err);
  })
};

exports.getLimitedDetailWorker = function(req, res){
  db.workers.findOne(
    {Phone_no: req.body.Phone_no, Password: req.body.Password},
    {Password: 0, Address:0, State:0, City:0, Pincode:0, Work_Category:0, Experience:0, Aadhar_Card:0}
  )
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};

exports.getAllDetailWorker = function(req, res){
  db.workers.findOne({Phone_no: req.body.Phone_no})
  .then(function(newUser){
    res.status(201).json(newUser);
  })
  .catch(function(err){
      res.send(err);
    })
};