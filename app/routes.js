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
// beta-v107-0-0
require('./routes/beta/v107-0-0/not-signed-in/view-latest-funding.js')(router);
require('./routes/beta/v107-0-0/not-signed-in/view-national-funding-formula-tables.js')(router);
require('./routes/beta/v107-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v107-0-0/signed-in/document-exchange.js')(router);
require('./routes/beta/v107-0-0/prototype.js')(router);
// beta-v106-0-0
require('./routes/beta/v106-0-0/not-signed-in/view-latest-funding.js')(router);
require('./routes/beta/v106-0-0/not-signed-in/view-national-funding-formula-tables.js')(router);
require('./routes/beta/v106-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v106-0-0/signed-in/document-exchange.js')(router);
require('./routes/beta/v106-0-0/prototype.js')(router);
// beta-v105-0-0
require('./routes/beta/v105-0-0/allocation-statements.js')(router);
require('./routes/beta/v105-0-0/document-exchange.js')(router);
require('./routes/beta/v105-0-0/error-pages.js')(router);
require('./routes/beta/v105-0-0/view-latest-funding.js')(router);
// beta-v104-0-0
require('./routes/beta/v104-0-0/allocation-statements.js')(router);
require('./routes/beta/v104-0-0/document-exchange.js')(router);
require('./routes/beta/v104-0-0/error-pages.js')(router);
require('./routes/beta/v104-0-0/view-latest-funding.js')(router);
// beta-v103-0-0
require('./routes/beta/v103-0-0/allocation-statements.js')(router);
require('./routes/beta/v103-0-0/document-exchange.js')(router);
require('./routes/beta/v103-0-0/error-pages.js')(router);
require('./routes/beta/v103-0-0/single-funding-statement.js')(router);
// beta-v102-0-0
require('./routes/beta/v102-0-0/allocation-statements.js')(router);
require('./routes/beta/v102-0-0/document-exchange.js')(router);
require('./routes/beta/v102-0-0/error-pages.js')(router);
require('./routes/beta/v102-0-0/single-funding-statement.js')(router);
// beta-v101-0-0
require('./routes/beta/v101-0-0/allocation-statements.js')(router);
require('./routes/beta/v101-0-0/document-exchange.js')(router);
require('./routes/beta/v101-0-0/error-pages.js')(router);
require('./routes/beta/v101-0-0/single-funding-statement.js')(router);
// beta-v100-0-0
require('./routes/beta/v100-0-0/allocation-statements.js')(router);
require('./routes/beta/v100-0-0/document-exchange.js')(router);
require('./routes/beta/v100-0-0/error-pages.js')(router);
require('./routes/beta/v100-0-0/single-funding-statement.js')(router);
// beta-v99-0-0
require('./routes/beta/v99-0-0/allocation-statements.js')(router);
require('./routes/beta/v99-0-0/document-exchange.js')(router);
require('./routes/beta/v99-0-0/error-pages.js')(router);
require('./routes/beta/v99-0-0/single-funding-statement.js')(router);
// beta-v98-0-0
require('./routes/beta/v98-0-0/allocation-statements.js')(router);
require('./routes/beta/v98-0-0/document-exchange.js')(router);
require('./routes/beta/v98-0-0/error-pages.js')(router);
require('./routes/beta/v98-0-0/single-funding-statement.js')(router);
// beta-v97-0-0
require('./routes/beta/v97-0-0/allocation-statements.js')(router);
require('./routes/beta/v97-0-0/document-exchange.js')(router);
require('./routes/beta/v97-0-0/error-pages.js')(router);
require('./routes/beta/v97-0-0/single-funding-statement.js')(router);
// beta-v96-0-0
require('./routes/beta/v96-0-0/allocation-statements.js')(router);
require('./routes/beta/v96-0-0/document-exchange.js')(router);
require('./routes/beta/v96-0-0/error-pages.js')(router);
require('./routes/beta/v96-0-0/single-funding-statement.js')(router);
// beta-v22-0-0
require('./routes/beta/v22-0-0/allocation-statements.js')(router);
require('./routes/beta/v22-0-0/document-exchange.js')(router);
require('./routes/beta/v22-0-0/error-pages.js')(router);
require('./routes/beta/v22-0-0/single-funding-statement.js')(router);
// beta-v21-0-0
require('./routes/beta/v21-0-0/allocation-statements.js')(router);
require('./routes/beta/v21-0-0/document-exchange.js')(router);
require('./routes/beta/v21-0-0/error-pages.js')(router);
require('./routes/beta/v21-0-0/pe-and-sport.js')(router);
// beta-v20-0-0
require('./routes/beta/v20-0-0/allocation-statements.js')(router);
require('./routes/beta/v20-0-0/document-exchange.js')(router);
require('./routes/beta/v20-0-0/error-pages.js')(router);
require('./routes/beta/v20-0-0/pe-and-sport.js')(router);
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
