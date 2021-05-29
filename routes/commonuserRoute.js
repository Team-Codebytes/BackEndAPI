var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/commonuserApi');


router.route("/")
	.get(helpers.getCommonUsers)
	.post(helpers.getAllDetailCommonUser)


router.route("/create")
	.post(helpers.createCommonUser)


router.route("/Login")
	.post(helpers.getLimitedDetailCommonUser)




module.exports = router;