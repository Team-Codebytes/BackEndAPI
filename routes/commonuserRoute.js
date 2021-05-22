var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/commonuserApi');

router.route("/")
	.get(helpers.getCommonUsers)
	.post(helpers.createCommonUser)


router.route("/:Email")
	.get(helpers.getLimitedDetailCommonUser)

router.route("/:Email/All")
	.get(helpers.getAllDetailCommonUser)



module.exports = router;