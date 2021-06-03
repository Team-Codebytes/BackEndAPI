var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/jobpostingApi');


router.route("/")
	.get(helpers.getJob)


router.route("/create")
	.post(helpers.createJob)


router.route("/:id/delete")
	.delete(helpers.deleteJob)

module.exports = router;