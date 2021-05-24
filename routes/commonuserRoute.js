var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/commonuserApi');


router.route("/")
	.post(helpers.getAllDetailCommonUser)


router.route("/createCommonUser")
	.post(helpers.createCommonUser)


router.route("/Login")
	.post(helpers.getLimitedDetailCommonUser)




module.exports = router;