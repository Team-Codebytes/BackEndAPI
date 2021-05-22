var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/ratingApi');

router.route("/")
	.get(helpers.getWorkersRatings)
	.post(helpers.createWorkerRating)


router.route("/:phone_no")
	.get(helpers.getWorkerRatings)



module.exports = router;