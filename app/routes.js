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
// beta-v20-0-0
require('./routes/beta/v20-0-0/allocation-statements.js')(router);
require('./routes/beta/v20-0-0/document-exchange.js')(router);
require('./routes/beta/v20-0-0/error-pages.js')(router);
// beta-v19-0-0
require('./routes/beta/v19-0-0/allocation-statements.js')(router);
require('./routes/beta/v19-0-0/document-exchange.js')(router);
require('./routes/beta/v19-0-0/error-pages.js')(router);
// beta-v18-0-0
require('./routes/beta/v18-0-0/allocation-statements.js')(router);
require('./routes/beta/v18-0-0/document-exchange.js')(router);
require('./routes/beta/v18-0-0/error-pages.js')(router);
// beta-v17-0-0
require('./routes/beta/v17-0-0/allocation-statements.js')(router);
require('./routes/beta/v17-0-0/document-exchange.js')(router);
require('./routes/beta/v17-0-0/error-pages.js')(router);
// beta-v16-0-0
require('./routes/beta/v16-0-0/allocation-statements.js')(router);
require('./routes/beta/v16-0-0/document-exchange.js')(router);
// beta-v15-0-0
require('./routes/beta/v15-0-0/allocation-statements.js')(router);
require('./routes/beta/v15-0-0/document-exchange.js')(router);
// beta-v14-0-0
require('./routes/beta/v14-0-0/allocation-statements.js')(router);
require('./routes/beta/v14-0-0/document-exchange.js')(router);
// beta-v13-0-0
require('./routes/beta/v13-0-0/allocation-statements.js')(router);
require('./routes/beta/v13-0-0/document-exchange.js')(router);
// beta-v12-0-0
require('./routes/beta/v12-0-0/document-exchange.js')(router);
// beta-v11-0-0
require('./routes/beta/v11-0-0/document-exchange.js')(router);
// beta-v10-0-0
require('./routes/beta/v10-0-0/document-exchange.js')(router);

module.exports = router;
