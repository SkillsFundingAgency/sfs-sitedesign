var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
	res.render('index');
});

/**********
 * CHILD ROUTE FILES
 * **********/

// Beta
// beta-v12-0-0
require('./routes/beta/v12-0-0/document-exchange.js')(router);
// beta-v11-0-0
require('./routes/beta/v11-0-0/document-exchange.js')(router);
// beta-v10-0-0
require('./routes/beta/v10-0-0/document-exchange.js')(router);

module.exports = router;
