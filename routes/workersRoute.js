var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/workersApi');

router.route("/")
	.get(helpers.getWorkers)
	.post(helpers.createWorker)


router.route("/:phone_no")
	.get(helpers.getLimitedDetailWorker)

router.route("/:phone_no/All")
	.get(helpers.getAllDetailWorker)



module.exports = router;