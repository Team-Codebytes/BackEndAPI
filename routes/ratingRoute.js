var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/ratingApi');


router.route("/")
	.post(helpers.getWorkerRatings)


router.route("/create")
	.post(helpers.createWorkerRating)

router.route("/update")
	.post(helpers.updateWorkerRating)

module.exports = router;