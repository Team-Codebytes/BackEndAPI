var express = require('express');
var router = express.Router();
var helpers = require('../helpers/enterpriceuserApi');

router.route("/")
	.get(helpers.getEnterpriceUsers)

router.route("/create")
	.post(helpers.createEnterpriceUser)

router.route("/:email")
	.get(helpers.getEnterpriceUser)



module.exports = router;