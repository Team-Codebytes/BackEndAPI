var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/imageApi');



router.route("/")
	.post(helpers.upload.single('file'), function(req, res){
		console.log(req.body, req.file.filename);
		if(req.body.image_cat === 'Aadhar Card'){
			res.json({file: req.file});
		}else if(req.body.image_cat ==='Profile'){
			if(req.body.user === 'commonuser'){
				let file = {
					fileName: req.file.filename,
					user_type: req.body.user,
					commonUserImg: {
						id: req.body.id,
						Phone_no: req.body.phone_no
	    			}
				}
				db.profileimg.create(file)
				.then(function(newUser){
					res.status(201).json(newUser);
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user === 'worker'){
				let file = {
					fileName: req.file.filename,
					user_type: req.body.user,
					workerImg: {
						id: req.body.id,
						Phone_no: req.body.phone_no
	    			}
				}
				db.profileimg.create(file)
				.then(function(newUser){
					res.status(201).json(newUser);
				})
				.catch(err => res.status(500).json(err));
			}else if(req.body.user === 'enterpriceuser'){
				let file = {
					fileName: req.file.filename,
					user_type: req.body.user,
					EnterpiceImg: {
						id: req.body.id,
						Email_id: req.body.email_id
	    			}
				}
				db.profileimg.create(file)
				.then(function(newUser){
					res.status(201).json(newUser);
				})
				.catch(err => res.status(500).json(err))
			}
			
		}
	});




module.exports = router;