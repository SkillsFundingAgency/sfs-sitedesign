var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
	res.render('index');
});

// Beta
require('./routes/beta/v1.0.0/document-exchange.js')(router);

module.exports = router;
