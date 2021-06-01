var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var db = require('../models/index');
var helpers = require('../helpers/imageApi');
const Grid = require('gridfs-stream');



// Mongo URI
const mongoURI = 'mongodb://localhost/backendapi';
//const mongoURI = "mongodb+srv://root:root123@apicluster.i3n9h.mongodb.net/backendapi?retryWrites=true&w=majority"
// mongodb+srv://codebyte:vishu123@backendapi.cijxr.mongodb.net/todo-list?retryWrites=true&w=majority

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});


// router.route("/")
// 	.post(helpers.upload.single('file'), function(req, res){
// 		console.log(req.body, req.file.filename);
// 		if(req.body.image_cat === 'Aadhar Card'){
// 			res.json({file: req.file});
// 		}else if(req.body.image_cat ==='Profile'){
// 			if(req.body.user_type === 'commonuser'){
// 				let file = {
// 					fileName: req.file.filename,
// 					user_type: req.body.user_type,
// 					commonUserImg: {
// 						id: req.body.id,
// 						Phone_no: req.body.phone_no
// 	    			}
// 				}
// 				db.profileimg.create(file)
// 				.then(function(newProfileImg){
// 					console.log(newProfileImg)
// 					res.status(201).json(newProfileImg);
// 				})
// 				.catch(err => res.status(500).json(err))
// 			}else if(req.body.user_type === 'worker'){
// 				let file = {
// 					fileName: req.file.filename,
// 					user_type: req.body.user_type,
// 					workerImg: {
// 						id: req.body.id,
// 						Phone_no: req.body.phone_no
// 	    			}
// 				}
// 				db.profileimg.create(file)
// 				.then(function(newProfileImg){
// 					console.log(newProfileImg)
// 					res.status(201).json(newProfileImg);
// 				})
// 				.catch(err => res.status(500).json(err));
// 			}else if(req.body.user_type === 'enterpriceuser'){
// 				let file = {
// 					fileName: req.file.filename,
// 					user_type: req.body.user_type,
// 					EnterpiceImg: {
// 						id: req.body.id,
// 						Email_id: req.body.email_id
// 	    			}
// 				}
// 				db.profileimg.create(file)
// 				.then(function(newUser){
// 					res.status(201).json(newUser);
// 				})
// 				.catch(err => res.status(500).json(err))
// 			}
			
// 		}
// 	});

router.route("/Get")
	.post(function(req, res){
		console.log(req.body);
		if(req.body.image_cat === 'Aadhar Card'){
			if(req.body.user_type === "commonuser"){
				db.commonuser.findOne({Phone_no: req.body.Phone_no})
				.then(function(newUser){
					console.log(newUser);
					gfs.files.findOne({ filename: newUser.Aadharimg }, (err, file) => {
						// Check if file
						if (!file || file.length === 0) {
						return res.status(404).json({
							err: 'No file exists'
						});
						}
						if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
							file.isImage = true;
						}else{
							file.isImage = false;
						}
						// File exists
						console.log("File Data: "+ file);
						return res.json(file);
					});	
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === "worker"){
				db.workers.findOne({Phone_no: req.body.Phone_no})
				.then(function(newUser){
					console.log(newUser);
					gfs.files.findOne({ filename: newUser.Aadharimg }, (err, file) => {
						// Check if file
						if (!file || file.length === 0) {
						return res.status(404).json({
							err: 'No file exists'
						});
						}
						if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
							file.isImage = true;
						}else{
							file.isImage = false;
						}
						// File exists
						console.log("File Data: "+ file);
						return res.json(file);
					});	
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === "enterpriceuser"){
				db.enterpriceuser.findOne({Email_id: req.body.Email})
				.then(function(newUser){
					console.log(newUser);
					gfs.files.findOne({ filename: newUser.Aadharimg }, (err, file) => {
						// Check if file
						if (!file || file.length === 0) {
						return res.status(404).json({
							err: 'No file exists'
						});
						}
						if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
							file.isImage = true;
						}else{
							file.isImage = false;
						}
						// File exists
						console.log("File Data: "+ file);
						return res.json(file);
					});	
				})
				.catch(err => res.status(500).json(err))
			}
		}else if(req.body.image_cat ==='Profile'){
			if(req.body.user_type === "commonuser"){
				db.commonuser.findOne({Phone_no: req.body.Phone_no})
				.then(function(newUser){
					console.log(newUser);
					gfs.files.findOne({ filename: newUser.Profileimg }, (err, file) => {
						// Check if file
						if (!file || file.length === 0) {
						return res.status(404).json({
							err: 'No file exists'
						});
						}
						if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
							file.isImage = true;
						}else{
							file.isImage = false;
						}
						// File exists
						console.log("File Data: "+ file);
						return res.json(file);
					});	
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === "worker"){
				db.workers.findOne({Phone_no: req.body.Phone_no})
				.then(function(newUser){
					console.log(newUser);
					gfs.files.findOne({ filename: newUser.Profileimg }, (err, file) => {
						// Check if file
						if (!file || file.length === 0) {
						return res.status(404).json({
							err: 'No file exists'
						});
						}
						if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
							file.isImage = true;
						}else{
							file.isImage = false;
						}
						// File exists
						console.log("File Data: "+ file);
						return res.json(file);
					});	
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === "enterpriceuser"){
				db.enterpriceuser.findOne({Email_id: req.body.Email})
				.then(function(newUser){
					console.log(newUser);
					gfs.files.findOne({ filename: newUser.Profileimg }, (err, file) => {
						// Check if file
						if (!file || file.length === 0) {
						return res.status(404).json({
							err: 'No file exists'
						});
						}
						if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
							file.isImage = true;
						}else{
							file.isImage = false;
						}
						// File exists
						console.log("File Data: "+ file);
						return res.json(file);
					});	
				})
				.catch(err => res.status(500).json(err))
			}
		}		
	});





router.route("/")
	.post(helpers.upload.single('file'), function(req, res){
		console.log(req.body, req.file.filename);
		if(req.body.image_cat === 'Aadhar Card'){
			if(req.body.user_type === 'commonuser'){
				db.commonuser.findOne({Phone_no: req.body.Phone_no})
				.then(function(User){
					console.log(User)
					User.Aadharimg = req.file.filename;
					User.save();
					res.status(201).json(User);
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === 'worker'){
				db.workers.findOne({Phone_no: req.body.Phone_no})
				.then(function(User){
					console.log(User)
					User.Aadharimg = req.file.filename;
					User.save();
					res.status(201).json(User);
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === 'enterpriceuser'){
				db.enterpriceuser.findOne({Email_id: req.body.Email})
				.then(function(User){
					console.log(User)
					User.Aadharimg = req.file.filename;
					User.save();
					res.status(201).json(User);
				})
				.catch(err => res.status(500).json(err))
			}
		}else if(req.body.image_cat ==='Profile'){
			if(req.body.user_type === 'commonuser'){
				db.commonuser.findOne({Phone_no: req.body.Phone_no})
				.then(function(User){
					console.log(User)
					User.Profileimg = req.file.filename;
					User.save();
					res.status(201).json(User);
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === 'worker'){
				db.workers.findOne({Phone_no: req.body.Phone_no})
				.then(function(User){
					console.log(User)
					User.Profileimg = req.file.filename;
					User.save();
					res.status(201).json(User);
				})
				.catch(err => res.status(500).json(err))
			}else if(req.body.user_type === 'enterpriceuser'){
				db.enterpriceuser.findOne({Email_id: req.body.Email})
				.then(function(User){
					console.log(User)
					User.Profileimg = req.file.filename;
					User.save();
					res.status(201).json(User);
				})
				.catch(err => res.status(500).json(err))
			}
			
		}
	});




// router.route("/create")
// 	.post(helpers.upload.single('file'), function(req, res){
// 		console.log(req.body, req.file.filename);
// 		if(req.body.image_cat === 'Aadhar Card' || req.body.image_cat === 'aadhar card'){
// 			res.json({file: req.file});
// 		}else if(req.body.image_cat ==='Profile' || req.body.image_cat ==='profile'){
// 			if(req.body.user_type === 'commonuser'){
// 				// db.commonuser.create(req.body)
// 				// .then(function(newUser){
// 				// 	console.log(newUser)
// 				// 	db.commonuser.findOne({_id:newUser._id})
// 				// 	.then(function(addFile){
// 				// 		addFile.Profileimg = req.file.filename;
// 				// 		addFile.save();
// 				// 		console.log(addFile);
// 				// 		res.status(201).json(addFile);
// 				// 	})
// 				// 	.catch(err => res.status(500).json(err));
// 				// })
// 				// .catch(err => res.status(500).json(err));




// 				db.phoneno.findOne({Phone_no: req.body.Phone_no})
// 				.then(function(isPhone_no){
// 					console.log(isPhone_no)
// 					if(isPhone_no == null ){
// 						db.commonuser.create(req.body)
// 						.then(function(newUser){
// 							console.log(newUser)
// 							let phone = {
// 							"Phone_no" : newUser.Phone_no
// 							}
							

// 							db.commonuser.findOne({_id:newUser._id})
// 							.then(function(addFile){
// 								addFile.Profileimg = req.file.filename;
// 								addFile.save();
// 								console.log(addFile);
// 							})
// 							.catch(err => res.status(500).json(err));


// 							db.phoneno.create(phone)
// 							.then(function(newPhone_no){
// 								console.log(newPhone_no)
// 							})
// 							.catch(function(err){res.send(err);})
// 							res.status(201).json(newUser);
// 						})
// 					}else{
// 						res.status(200).json({
// 							success: false,
// 							message: "Phone Number Exist use Another Phone Number"
// 						});
// 					}
// 				})  
// 				.catch(function(err){
// 					res.send(err);
// 				})






// 			}else if(req.body.user_type === 'worker'){
// 				db.workers.create(req.body)
// 				.then(function(newUser){
// 					console.log(newUser)
// 					db.workers.findOne({_id:newUser._id})
// 					.then(function(addFile){
// 						addFile.Profileimg = req.file.filename;
// 						addFile.save();
// 						console.log(addFile);
// 						res.status(201).json(addFile);
// 					})
// 					.catch(err => res.status(500).json(err));
// 				})
// 				.catch(err => res.status(500).json(err));
// 			}else if(req.body.user_type === 'enterpriceuser'){
// 				// db.enterpriceuser.create(req.body)
// 				// .then(function(newUser){
// 				// 	console.log(newUser)
// 				// 	db.enterpriceuser.findOne({_id:newUser._id})
// 				// 	.then(function(addFile){
// 				// 		addFile.Profileimg = req.file.filename;
// 				// 		addFile.save();
// 				// 		console.log(addFile);
// 				// 		res.status(201).json(addFile);
// 				// 	})
// 				// 	.catch(err => res.status(500).json(err));
// 				// })
// 				// .catch(err => res.status(500).json(err));




// 				db.phoneno.findOne({Phone_no: req.body.Phone_no})
// 				.then(function(isPhone_no){
// 					console.log(isPhone_no)
// 					if(isPhone_no == null ){
// 						db.enterpriceuser.create(req.body)
// 						.then(function(newUser){
// 							let phone = {
// 								"Phone_no" : newUser.Phone_no
// 							}

// 							db.enterpriceuser.findOne({_id:newUser._id})
// 							.then(function(addFile){
// 								addFile.Profileimg = req.file.filename;
// 								addFile.save();
// 								console.log(addFile);
// 							})
// 							.catch(err => res.status(500).json(err));

// 							db.phoneno.create(phone)
// 							.then(function(newPhone_no){
// 								console.log(newPhone_no)
// 							})
// 							.catch(function(err){
// 								res.send(err);
// 							})
// 							res.status(201).json(newUser);
// 						})
// 					}else{
// 						res.status(200).json({
// 							success: false,
// 							message: "Phone Number Exist use Another Phone Number"
// 						});
// 					}
// 				})
// 				.catch(function(err){
// 					res.send(err);
// 				})









// 			}
			
// 		}
// 	});


module.exports = router;