var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/jobpostingAPi');


router.route("/")
	.get(helpers.getJob)


router.route("/create")
	.post(helpers.createJob)

module.exports = router;