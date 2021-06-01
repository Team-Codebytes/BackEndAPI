var express = require('express');
var router = express.Router();
var helpers = require('../helpers/enterpriceuserApi');

router.route("/:id")
	.get(helpers.getAllDetailEnterpriceUser)

router.route("/create")
	.post(helpers.createEnterpriceUser)

router.route("/Login")
	.get(helpers.getLimitedDetailEnterpriceUser)



module.exports = router;