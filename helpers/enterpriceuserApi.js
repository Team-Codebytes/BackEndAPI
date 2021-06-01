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
	db.phoneno.findOne({Phone_no: req.body.Phone_no})
  	.then(function(isPhone_no){
		console.log(isPhone_no)
		if(isPhone_no == null ){
			db.enterpriceuser.create(req.body)
			.then(function(newUser){
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

exports.getEnterpriceUser = function(req, res){
	db.enterpriceuser.findOne({Email_id: req.params.email})
	.then(function(newUser){
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};

exports.getLimitedDetailEnterpriceUser = function(req, res){
	db.enterpriceuser.findOne({Email_id: req.params.Email, Password: req.body.Password},{Password: 0, Address:0, State:0, City:0, Pincode:0})
	.then(function(newUser){
	  res.status(201).json(newUser);
	})
	.catch(function(err){
		res.send(err);
	  })
  };

  exports.getAllDetailEnterpriceUser = function(req, res){
	console.log(req.params.id)
	db.enterpriceuser.findOne({_id: req.params.id})
	.then(function(newUser){
	  res.status(201).json(newUser);
	})
	.catch(function(err){
		res.send(err);
	  })
  };
