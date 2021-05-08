var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helpers = require('../helpers/commonuserApi');

router.route("/")
	.get(helpers.getCommonUsers)
	.post(helpers.createCommonUser)



module.exports = router;