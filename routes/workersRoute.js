var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/workersApi');

router.route("/create")
	.post(helpers.createWorker)


router.route("/Login")
	.post(helpers.getLimitedDetailWorker)

router.route("/")
	.get(helpers.getWorkers)

router.route("/:id")	
	.get(helpers.getAllDetailWorker)



module.exports = router;