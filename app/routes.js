

/**********
* GLOBAL VARIABLES
* **********/

// For prototype to work
var express = require('express');
var router = express.Router();

// Add latest versions of stable MYESF features here
var latestVersion = 'beta/v115-0-0';
var latestVersionVLF = 'beta/v105-1-0';
var latestVersionNFF = 'beta/v110-0-0';
var latestVersionAdults = 'beta/v112-0-0';
var latestVersionGAG = 'beta/v112-0-0';
var latestVersionDocumentExchange = 'beta/v109-0-0';

/**********
* GLOBAL PROTOTYPE PAGES
* **********/

// Index page
router.get('/', function (req, res) {		
	res.render('index', {
		'latestVersion' : latestVersion,
		'latestVersionVLF' : latestVersionVLF,
		'latestVersionNFF' : latestVersionNFF,
		'latestVersionAdults' : latestVersionAdults,
		'latestVersionGAG' : latestVersionGAG,
		'latestVersionDocumentExchange' : latestVersionDocumentExchange,
		'showPropositionLinks' : "True"
	});
});

// Archive page
router.get('/archive', function (req, res) {		
	res.render('archive', {
		'latestVersion' : latestVersion,
		'showPropositionLinks' : "True"
	});
});

// Legacy page
router.get('/legacy', function (req, res) {		
	res.render('legacy', {
		'latestVersion' : latestVersion,
		'showPropositionLinks' : "True"
	});
});

/**********
* CHILD ROUTE FILES
* **********/

// Component library
require('./routes/component-library.js')(router);

/**********
* VERSIONED ROUTE FILES
* **********/

// Beta
// beta-v115-0-0
require('./routes/beta/v115-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v115-0-0/prototype.js')(router);
// beta-v114-0-0
require('./routes/beta/v114-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v114-0-0/prototype.js')(router);
// beta-v113-0-0
require('./routes/beta/v113-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v113-0-0/prototype.js')(router);
// beta-v112-0-0
require('./routes/beta/v112-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v112-0-0/prototype.js')(router);
// beta-v111-0-0
require('./routes/beta/v111-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v111-0-0/prototype.js')(router);
// beta-v110-0-0
require('./routes/beta/v110-0-0/not-signed-in/view-national-funding-formula-tables.js')(router);
require('./routes/beta/v110-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v110-0-0/prototype.js')(router);
// beta-v109-0-0
require('./routes/beta/v109-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v109-0-0/signed-in/document-exchange.js')(router);
require('./routes/beta/v109-0-0/prototype.js')(router);
// beta-v108-0-0
require('./routes/beta/v108-0-0/not-signed-in/view-national-funding-formula-tables.js')(router);
require('./routes/beta/v108-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v108-0-0/signed-in/document-exchange.js')(router);
require('./routes/beta/v108-0-0/prototype.js')(router);
// beta-v107-0-0
require('./routes/beta/v107-0-0/not-signed-in/view-national-funding-formula-tables.js')(router);
require('./routes/beta/v107-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v107-0-0/signed-in/document-exchange.js')(router);
require('./routes/beta/v107-0-0/prototype.js')(router);
// beta-v106-0-0
require('./routes/beta/v106-0-0/not-signed-in/view-national-funding-formula-tables.js')(router);
require('./routes/beta/v106-0-0/signed-in/allocation-statements.js')(router);
require('./routes/beta/v106-0-0/signed-in/document-exchange.js')(router);
require('./routes/beta/v106-0-0/prototype.js')(router);
// beta-v105-1-0
require('./routes/beta/v105-1-0/not-signed-in/view-latest-funding.js')(router);
require('./routes/beta/v105-1-0/prototype.js')(router);
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
