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
				.then(function(newProfileImg){
					console.log(newProfileImg)
					res.status(201).json(newProfileImg);
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
				.then(function(newProfileImg){
					console.log(newProfileImg)
					res.status(201).json(newProfileImg);
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

router.route("/Get")
	.post(function(req, res){
		let data;
		if(req.body.user === "commonuser"){
			db.profileimg.findOne({"commonUserImg.Phone_no":req.body.Phone_no})
			.then(function(newUser){
				console.log(newUser.fileName);
				helpers.gfs.find({filename: newUser.fileName}).toArray((err, files) => {
					if(!files[0] || files.length === 0){
						console.log("filename if condititon "+ files[0]);
						return res.status(200).json({
							success: false,
							message: "No Such File Exist"
						});
					}
					gfs.openDownloadStreamByName(newUser.fileName).pipe(res);
					console.log("filename "+ files[0]);
					res.status(200).json({
						success: true,
						file: files[0]
					});
				});	
			})
			.catch(err => res.status(500).json(err))
		}	
	});


module.exports = router;