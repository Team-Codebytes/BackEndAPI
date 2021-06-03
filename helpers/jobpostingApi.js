var db = require('../models/index');

exports.createJob = function(req, res){
	db.jobposting.create(req.body)
	.then(function(newUser){
    console.log(newUser)
		res.status(201).json(newUser);
	})
	.catch(function(err){
  		res.send(err);
  	})
};

exports.getJob = function (req, res) {
    db.jobposting.find()
    .then(function(users){
        res.json(users);
    })
    .catch(function(err){
        res.send(err);
    })
};


exports.deleteJob = function(req, res){
    db.jobposting.remove({_id: req.params.id})
    .then(function(){
        
        return res.status(404).json({
            message: 'Job with _id: '+req.params.id+' deleted successfully',
            success: true
        })
    })
    .catch(function(err){
        res.send(err);
    })
}