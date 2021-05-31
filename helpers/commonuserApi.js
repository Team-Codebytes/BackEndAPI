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
  db.phoneno.findOne({Phone_no: req.body.Phone_no})
  .then(function(isPhone_no){
    console.log(isPhone_no)
    if(isPhone_no == null ){
      db.commonuser.create(req.body)
      .then(function(newUser){
        console.log(newUser)
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

exports.getLimitedDetailCommonUser = function(req, res){
  db.commonuser.findOne({Phone_no: req.body.Phone_no, Password: req.body.Password},{Address:0, State:0, City:0, Pincode:0, Aadhar_Card:0})
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
