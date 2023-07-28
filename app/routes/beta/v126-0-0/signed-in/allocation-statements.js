module.exports = function(router) {
	
	var version = 'beta/v126-0-0';
	var latestVersionVLF = 'beta/v105-1-0';
	
	/**********
	* GLOBAL VARIABLES
	* MYESF (ALLOCATION STATEMENTS)
	* **********/
	
	/**********
	* 14 TO 16 - CHILD VIEW (ALL ELIGIBLE INSTITUTIONS)
	* **********/
	
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/*', function (req, res, next) {
		
		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";
		
		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// GENERAL ANNUAL GRANT
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/14-to-16/child/roles-and-permissions';
		
		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/14-to-16/child/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/allocation-statements/14-to-16/child/start';
		
		return next();
	});
	
	/**********
	* 14 TO 16 - PARENT VIEW (MAT)
	* **********/
	
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/*', function (req, res, next) {
		
		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";
		
		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// GENERAL ANNUAL GRANT (PARENT)
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/roles-and-permissions';
		
		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/start';
		
		return next();
	});
	
	/**********
	* 16 TO 19 - CHILD VIEW (ALL ELIGIBLE INSTITUTIONS)
	* **********/
	
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/*', function (req, res, next) {
		
		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";
		
		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// GENERAL ANNUAL GRANT
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/16-to-19/child/roles-and-permissions';
		
		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/16-to-19/child/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/allocation-statements/16-to-19/child/start';
		
		return next();
	});
	
	/**********
	* 16 TO 19 - PARENT VIEW (MAT)
	* **********/
	
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/*', function (req, res, next) {
		
		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";
		
		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// GENERAL ANNUAL GRANT (PARENT)
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/roles-and-permissions';
		
		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/start';
		
		return next();
	});
	
	/**********
	* SIGNED IN (EXTERNAL USERS)
	* MYESF (ALLOCATION STATEMENTS)
	* 14 TO 16 - CHILD VIEW (ALL ELIGIBLE INSTITUTIONS)
	* **********/
	
	// Allocation history
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/allocation-history', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "1";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/child/allocation-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	// REDIRECT hook page used to record the tab that the user wants to view on the 14 to 16 breakdown page
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/tab-choice', function (req, res) {
		
		req.session.tab = req.query.tab;
		// Reset this variable to 0 so we can execute the dynamic tab functionality
		req.session.reloads = 0;
		var redirectURL = req.query.redirectURL;
		
		res.redirect('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/' + redirectURL);
	});
	
	// Full funding allocation (14 to 16: all statement variant blocks nested on same page)
	// LATEST (12 SEPTEMBER 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'tab' : req.session.tab,
			'scenario' : req.query.scenario
		});
	});
	
	// Full funding allocation (14 to 16: all statement variant blocks nested on same page)
	// PREVIOUS (27 JULY 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/27-07-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/27-07-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'tab' : req.session.tab,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* SIGNED IN (EXTERNAL USERS)
	* MYESF (ALLOCATION STATEMENTS)
	* 14 TO 16 - PARENT VIEW (MAT)
	* **********/
	
	/**********
	* MAT
	* **********/
	
	// Allocation history
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/mat/allocation-history', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Rupert Shoggins Academy Trust";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/parent/mat/allocation-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	// Full funding allocation (14 to 16: all statement variant blocks nested on same page)
	// LATEST (12 SEPTEMBER 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/mat/funding-breakdown/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Rupert Shoggins Academy Trust";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/parent/mat/funding-breakdown/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	// Full funding allocation (14 to 16: all statement variant blocks nested on same page)
	// PREVIOUS (27 JULY 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/mat/funding-breakdown/27-07-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Rupert Shoggins Academy Trust";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/parent/mat/funding-breakdown/27-07-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* FE Variance Selector (Radio Buttons Page)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-fe/variance-selection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-fe/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* Academy Variance Selector (Radio Buttons Page)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-academy/variance-selection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-academy/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* NMSS Variance Selector (Radio Buttons Page)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/variance-selection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* NMSS Variance Selector (Radio Buttons Page) 2 - This second one is needed to redirect to the chosen tab
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/variance-selection-2', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/variance-selection-2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* SSF Variance Selector (Radio Buttons Page)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/variance-selection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* LA Variance Selector (Radio Buttons Page)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-la/variance-selection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-la/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* 14-16 Variance Selector (Radio Buttons Page)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/variance-selection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* 14-16 Variance Selector (Radio Buttons Page) 2 - See notes on NMSS variance-selection page for why two radio button pages are needed for tab direction within the prototype
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/variance-selection-2', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/variance-selection-2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});	
	
	/**********
	* SPI Variance Selection (Radio Button Page)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/variance-selection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* SPI Radio Test - Additional Tets
	* **********/
	
	// This is a separate, additional radio button page with two options for testing from another point of the statement listing
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/radiotest-2', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/radiotest-2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* SPI Variant Test
	* **********/
	
	// Separate SPI Statement for the sole purpose of being linked to via radio button choices, to display three options on showing variants.
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/latest-variance', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/latest-variance', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	
	/**********
	* Indicative Statements (non-comparison)
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-indicative/04-06-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-indicative/04-06-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* Radio Button page for Indicative Statement Variation Choices
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-indicative/indicative-versions', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-indicative/indicative-versions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* Radio Button page for Summary Statement Variation Choices
	* **********/
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-indicative/summary-versions', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-indicative/summary-versions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - - - - - - - - - - - - ******************** - - - - - - - - - - - - - */
	/* - - - - Mockup for the Dual Authentication for IDAMS and DfE Sign-in - - - - */
	/* - - - - - - - - - - - - - - - ******************** - - - - - - - - - - - - - */
	
	/* - - - - Dual Auth Signposting (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-test/select-your-organisation', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-test/select-your-organisation', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In IDAMS (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-test/login-idams', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-test/login-idams', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In DfE (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-test/login-dfe', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-test/login-dfe', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In IDAMS (MOCKUP ONLY - TEMP) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-test/login-idams-sens', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-test/login-idams-sens', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In DfE (MOCKUP ONLY - TEMP) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-test/login-dfe-sens', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-test/login-dfe-sens', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - User Roles and Permissions (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/roles-test/your-roles-permissions', function (req, res) {
		
		res.render(version + '/signed-in/roles-test/your-roles-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - - - - - - - - - - - - ******************** - - - - - - - - - - - - - */
	/* - - - - - - Mockup for the Roles & Dual Auth Sign-in UR Sessions - - - - - - */
	/* - - - - - - - - - - - - - - - ******************** - - - - - - - - - - - - - */
	
	/* - - - - Dual Auth Signposting (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/select-your-organisation', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/select-your-organisation', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In IDAMS (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/login-idams', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/login-idams', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In DfE (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/login-dfe', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/login-dfe', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In IDAMS (MOCKUP ONLY - TEMP) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/login-idams-sens', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/login-idams-sens', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Sign-In DfE (MOCKUP ONLY - TEMP) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/login-dfe-sens', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/login-dfe-sens', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - User Roles and Permissions (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/view-your-roles', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/view-your-roles', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Dashboard for the Roles Journey (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/dashboard', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/dashboard', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Page to view all roles (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/all-roles', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/all-roles', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Page to view all roles (MOCKUP ONLY) - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/no-access', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/no-access', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	
	/* - - - - Page warning users they will need to current role to access the apprenticeship service - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/apprenticeship-roles', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/apprenticeship-roles', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Page prompting the user that their apprenticeship agreement is unsigned - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/apprenticeship-unsigned', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/apprenticeship-unsigned', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - Page that will be displayed if the user has no apprenticeship service agreement - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles/apprenticeship-no-agreement', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles/apprenticeship-no-agreement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - */
	/* - - - - ALTERNATE VERSION OF SIGN-IN-ROLES BASED ON PRE-PROD ENVIRONMENT - - - - */
	/* - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - */
	
	router.get('/' + version + '/signed-in/sign-in-roles-alt/dashboard', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles-alt/dashboard', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/sign-in-roles-alt/dashboard-alt', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles-alt/dashboard-alt', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/sign-in-roles-alt/view-your-roles', function (req, res) {
		
		res.render(version + '/signed-in/sign-in-roles-alt/view-your-roles', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - - - - - - - - - - - - - - - */
	/* - - - - RECOUPMENT FROM DSG - - - - */
	/* - - - - - - - - - - - - - - - - - - */
	
	router.get('/' + version + '/signed-in/recoupment/recoupment-report', function (req, res) {
		
		res.render(version + '/signed-in/recoupment/recoupment-report', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment/recoupment-reports', function (req, res) {
		
		res.render(version + '/signed-in/recoupment/recoupment-reports', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment/recoupment-report-real', function (req, res) {
		
		res.render(version + '/signed-in/recoupment/recoupment-report-real', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment/recoupment-report-real-alt', function (req, res) {
		
		res.render(version + '/signed-in/recoupment/recoupment-report-real-alt', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment/recoupment-history', function (req, res) {
		
		res.render(version + '/signed-in/recoupment/recoupment-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment-alt/recoupment-report', function (req, res) {
		
		res.render(version + '/signed-in/recoupment-alt/recoupment-report', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment-alt/retainment-report', function (req, res) {
		
		res.render(version + '/signed-in/recoupment-alt/retainment-report', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment-alt/variance-selection', function (req, res) {
		
		res.render(version + '/signed-in/recoupment-alt/variance-selection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment-primsec/recoupment-report', function (req, res) {
		
		res.render(version + '/signed-in/recoupment-primsec/recoupment-report', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/recoupment-primsec/recoupment-history', function (req, res) {
		
		res.render(version + '/signed-in/recoupment-primsec/recoupment-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	/* - - - - - - - - - - - - - - - */
	/* - - - - SubContractor-flow - - - - */
	/* - - - - - - - - - - - - - - - */
	
	router.get('/' + version + '/signed-in/subcontractor-flow/prototype-index', function (req, res) {
		
		res.render(version + '/signed-in/subcontractor-flow/prototype-index', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/subcontractor-flow/subcontractor-summary', function (req, res) {
		
		res.render(version + '/signed-in/subcontractor-flow/subcontractor-summary', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	
	/* - - - - - - - - - - - - - - - */
	/* - - - - PUPIL PREMIUM - - - - */
	/* - - - - - - - - - - - - - - - */
	
	router.get('/' + version + '/signed-in/pupil-premium/version/mat-view', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/mat-view', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	//mat-vie-gag
	router.get('/' + version + '/signed-in/pupil-premium/version/mat-view-gag', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/mat-view-gag', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium/version/single-view', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/single-view', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	//new view
	router.get('/' + version + '/signed-in/pupil-premium/version/single-views', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/single-views', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/single-viewed', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/single-viewed', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/single-view-gag', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/single-view-gag', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium/version/single-view-dev', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/single-view-dev', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/single-view-filter', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/single-view-filter', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium/version/listing/allocation-statements', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/listing/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium/version/listing/allocation-statements-view', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/listing/allocation-statements-view', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/listing/allocation-statements-filter', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/listing/allocation-statements-filter', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history-laedit', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history-laedit', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history-dev', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history-dev', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	//History new page for viewed link
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history-viewed', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history-viewed', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history-view', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history-view', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history-new', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history-new', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history-new1', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history-new1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/pupil-premium/version/pupil-premium-history-views', function (req, res) {
		res.render(version + '/signed-in/pupil-premium/version/pupil-premium-history-views', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - - - - - - - - - - - - - - - - - - */
	/* - - - - PUPIL PREMIUM JOURNEY - - - - */
	/* - - - - - - - - - - - - - - - - - - - */
	
	
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/mat-view', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/mat-view', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/single-view', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/single-view', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/single-view-dev', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/single-view-dev', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	
	
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/listing/allocation-statements', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/listing/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	/* new route - viewed allocation statements*/
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/listing/allocation-statements-viewed', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/listing/allocation-statements-viewed', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/listing/allocation-statement-gag', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/listing/allocation-statement-gag', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* end*/
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/pupil-premium-history', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/pupil-premium-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/pupil-premium-history-dev', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/pupil-premium-history-dev', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/pupil-premium-journey/version/dashboard', function (req, res) {
		res.render(version + '/signed-in/pupil-premium-journey/version/dashboard', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/* - - LA Pupil Premium - - */
	
	router.get('/' + version + '/signed-in/la-pupil-premium/la-pp', function (req, res) {
		res.render(version + '/signed-in/la-pupil-premium/la-pp', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	router.get('/' + version + '/signed-in/la-pupil-premium/la-pp-tabbed', function (req, res) {
		res.render(version + '/signed-in/la-pupil-premium/la-pp-tabbed', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	
	/**********
	* SIGNED IN (EXTERNAL USERS)
	* MYESF (ALLOCATION STATEMENTS)
	* 16 TO 19 - CHILD VIEW (ALL ELIGIBLE INSTITUTIONS)
	* **********/
	
	// GOV.UK Entry Point
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/start', function (req, res) {
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'latestVersionVLF' : latestVersionVLF
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/start', function (req, res) {
		res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dfe-sign-in/sign-in');
	});
	
	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dfe-sign-in/sign-in', function (req, res) {
		
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;
		
		// Make sure the user enters a username and password
		if (username == "" || password == "") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (username == "novalidroles") {
			
			req.session.signedIn = "Yes";
			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "1";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (username == "noapprenticeshipservice") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.sixteenToNineteenVariant = "1";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show users the variant 1 - Academy view
		else if (username == "academy") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "Academy";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show users the variant 2 - Further Education (FE) view
		else if (username == "fe") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "FE";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show users variant 3 - Non Maintained Special School (NMSS) view
		else if (username == "nmss") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "NMSS";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show users the variant 4 - Special Post-16 Institution (SPI) view
		else if (username == "spi") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "SPI";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show users the variant 5 - School Sixth Form (SSF) view
		else if (username == "ssf") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "SSF";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show users variant 6 - Local Authority (LA) view
		else if (username == "la") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "LA";
			req.session.idams = "LA";
			req.session.organisationName = "Redhill Council";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		// DEFAULT to variant 2 - Further Education (FE) view
		else {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "FE";
			req.session.idams = "other";
			req.session.organisationName = "Casterbridge College";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		
	});
	
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "FE";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/401/access-not-allowed', {
				'version' : version,
				'versioning' : req.session.versioning,
				'signedIn' : req.session.signedIn,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "other";
			
			res.render(version + '/signed-in/external/allocation-statements/16-to-19/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
				'tagType' : req.query.tagType
			});
		}
		
	});
	
	// ERROR 1 - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/access-not-allowed', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		
		res.render(version + '/error-pages/401/access-not-allowed', {
			'version' : version,
			'versioning' : req.session.versioning,
			'signedIn' : req.session.signedIn,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MYESF
	// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/no-apprenticeship-service', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "FE";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	// Allocation statements (LA)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-statements-la', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-statements-la', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	/**********
	* 16 TO 19
	* **********/
	
	// Allocation history
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-history', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "FE";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	// Allocation history-no-data TEST
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-new-user-no-data', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "FE";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-new-user-no-data', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	// REDIRECT hook page used to record the tab that the user wants to view on the 16 to 19 breakdown page (NMSS)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/tab-choice', function (req, res) {
		
		req.session.tab = req.query.tab;
		// Reset this variable to 0 so we can execute the dynamic tab functionality
		req.session.reloads = 0;
		var redirectURL = req.query.redirectURL;
		
		res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/' + redirectURL);
	});
	
	// Full funding allocation (16 to 19: all statement variant blocks nested on same page)
	// LATEST (12 SEPTEMBER 2021)
	
	// VARIANT 1 - ACADEMY
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-academy/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-academy/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	// VARIANT 2 - FE
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-fe/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-fe/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario,
			'methodology' : req.query.methodology
		});
	});
	
	// VARIANT 3 - NMSS
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'tab' : req.session.tab,
			'scenario' : req.query.scenario
		});
	});
	
	// VARIANT 3b - NMSS
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/difference', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/difference', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'tab' : req.session.tab,
			'scenario' : req.query.scenario
		});
	});
	
	
	// VARIANT 4 - SPI
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-spi/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	
	// VARIANT 5 - SSF
	// A/B TESTING (Version A)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-programme-formula', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-programme-formula', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-condition-of-funding', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-condition-of-funding', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-care-standards', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-care-standards', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-formula-protection', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-formula-protection', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-high-needs', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-high-needs', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-student-financial-support', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-student-financial-support', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-industry-placement', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-industry-placement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-advanced-maths', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-advanced-maths', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-high-value', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-high-value', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-teachers-pension', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-teachers-pension', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-alternative-completion', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021-alternative-completion', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	// VARIANT 5 - SSF
	// A/B TESTING (Version B)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-ssf/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	// VARIANT 6 - LA (SCHOOL SIXTH FORM REVENUE FUNDING ALLOCATIONS)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-la/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-la/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	// VARIANT 7 - LA (STUDENT NUMBERS)
	/* router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-la/05-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-la/05-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	}); */
	
	// Full funding allocation (14 to 16: all statement variant blocks nested on same page)
	// PREVIOUS (27 JULY 2021)
	
	// VARIANT 2 - FE
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-fe/27-07-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-fe/27-07-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* SIGNED IN (EXTERNAL USERS)
	* MYESF (ALLOCATION STATEMENTS)
	* 16 TO 19 - PARENT VIEW (MAT)
	* **********/
	
	// GOV.UK Entry Point
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/start', function (req, res) {
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'latestVersionVLF' : latestVersionVLF
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/start', function (req, res) {
		res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/sign-in');
	});
	
	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/sign-in', function (req, res) {
		
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;
		
		// Make sure the user enters a username and password
		if (username == "" || password == "") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (username == "novalidroles") {
			
			req.session.signedIn = "Yes";
			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (username == "noapprenticeshipservice") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.sixteenToNineteenVariant = "MAT";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		// Show users the MAT view
		else if (username == "mat") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Mole Catch Academy";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		// DEFAULT to MAT view
		else {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Mole Catch Academy";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		
	});
	//GOVUK entry LA view
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-start', function (req, res) {
		res.render(version + '/la-start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'latestVersionVLF' : latestVersionVLF
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-start', function (req, res) {
		res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/la-sign-in');
	});
	
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/la-sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/la-sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/la-sign-in', function (req, res) {
		
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;
		
		// Make sure the user enters a username and password
		if (username == "" || password == "") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dfe-sign-in/la-sign-in?error=true');
		}
		
		
		//New username and password for an LA who has sub-service roles for both funded schools and training provider
		else if (username == "lafs" || password == "newlaview" ) {
			
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Mole Catch Academy";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/la-dashboard2');		
		}
		
		//New username and password for an LA who only has sub-service role for funded schools
		else if (username == "latp" || password == "newlaview2" ) {
			
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Mole Catch Academy";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/la-dashboard3.html');		
		}
		else if (username == "latp") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Mole Catch Academy";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard3');
		}
		
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (username == "novalidroles") {
			
			req.session.signedIn = "Yes";
			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (username == "noapprenticeshipservice") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.sixteenToNineteenVariant = "MAT";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard');
		}
		// Show users the MAT view
		else if (username == "la") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Mole Catch Academy";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		// DEFAULT to MAT view
		else {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Mole Catch Academy";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard');
		}
		
	});
	//LA-Dashboard
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/401/access-not-allowed', {
				'version' : version,
				'versioning' : req.session.versioning,
				'signedIn' : req.session.signedIn,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "MAT";
			
			res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
				'tagType' : req.query.tagType
			});
		}
		
	});
	//LA-Dashboard
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard-visited', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/401/access-not-allowed', {
				'version' : version,
				'versioning' : req.session.versioning,
				'signedIn' : req.session.signedIn,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "MAT";
			
			res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-dashboard-visited', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
				'tagType' : req.query.tagType
			});
		}
		
	});
	//LA-Dashboard
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard1', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/401/access-not-allowed', {
				'version' : version,
				'versioning' : req.session.versioning,
				'signedIn' : req.session.signedIn,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "MAT";
			
			res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-dashboard1', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
				'tagType' : req.query.tagType
			});
		}
		
	});
	//LA-Dashboard
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-dashboard2', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/401/access-not-allowed', {
				'version' : version,
				'versioning' : req.session.versioning,
				'signedIn' : req.session.signedIn,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "MAT";
			
			res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-dashboard2', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
				'tagType' : req.query.tagType
			});
		}
		
	});
	
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/401/access-not-allowed', {
				'version' : version,
				'versioning' : req.session.versioning,
				'signedIn' : req.session.signedIn,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "MAT";
			
			res.render(version + '/signed-in/external/allocation-statements/16-to-19/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
				'tagType' : req.query.tagType
			});
		}
		
	});
	
	// ERROR 1 - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/access-not-allowed', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/error-pages/401/access-not-allowed', {
			'version' : version,
			'versioning' : req.session.versioning,
			'signedIn' : req.session.signedIn,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MYESF
	// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/no-apprenticeship-service', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	/*********** *
	** LA 
	/*********** */
	
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-allocation-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});

	// Allocation statements pre16 and 19+
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-pre16and16to19-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-pre16and16to19-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	// Allocation statements pre16 and 19+
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-tp-pre16and16to19-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-tp-pre16and16to19-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-statements-visited', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-statements-visited', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-lafs-statement', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-lafs-statement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-statements-new', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-statements-new', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-statements-new1', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-statements-new1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	// Allocation statements individual schools
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-statements-visited1', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-statements-visited1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-statements-visited2', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-statements-visited2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-statements-visited3', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-statements-visited3', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-statements-visited4', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-statements-visited4', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	// Training provider statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-training-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-training-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	// AEB Training provider statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/aeb-budget-grant-v12', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/aeb-budget-grant-v12', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	// AEB2 Training provider statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/aeb-budget-grant-v22', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/aeb-budget-grant-v12', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//AEB contract Training provider statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/aeb-budget-contract-services1', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/aeb-budget-contract-services1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//AEB2 Training provider statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/aeb-budget-contract-services2', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/aeb-budget-contract-services2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//LA Training provider statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-latp-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-latp-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//pupil premium statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/pupil-premium-view', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/pupil-premium-view', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});//pupil premium statement
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/pupil-premium-view1', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/pupil-premium-view1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//Optional page 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-optionalpage', function (req, res) {
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-optionalpage', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//Optional page 2
router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-optionalpage2', function (req, res) {
	req.session.dashboard = "No";
	// Only set the session variable if it does not exist
	req.session.idams = req.session.idams || "MAT";
	req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
	req.session.organisationName = req.session.organisationName || "";

	res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-optionalpage2', {
		'version' : version,
		'versioning' : req.session.versioning,
		'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
		'signOutURL' : req.session.signOutURL,
		'dashboard' : req.session.dashboard,
		'idams' : req.session.idams,
		'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
		'organisationName' : req.session.organisationName,
		'nothingToView' : req.query.nothingToView,
		'noFilterResults' : req.query.noFilterResults
	});
});
	//Optional page 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-optionalpage-visited', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-optionalpage-visited', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//Optional page 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/la-optionalpages', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/la-optionalpages', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//Boulder Cross statement 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/bouldercross-statement', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/bouldercross-statement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//Barley Grove statement 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/barley-grove-statement', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/barley-grove-statement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	
	//Kale Dean statement 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/kale-dean-statement', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/kale-dean-statement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//Seacrest statement 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/seacrest-academy-statement', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/seacrest-academy-statement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	//wolfhook statement 
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/wolfhook-statement', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/wolfhook-statement', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	/**********
	* MAT
	* **********/
	
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/allocation-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName,
			'nothingToView' : req.query.nothingToView,
			'noFilterResults' : req.query.noFilterResults
		});
	});
	
	// Allocation history
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/allocation-history', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "MAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/allocation-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'sixteenToNineteenVariant' : req.session.sixteenToNineteenVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	// Full funding allocation (16 to 19: all statement variant blocks nested on same page)
	// LATEST (12 SEPTEMBER 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/funding-breakdown-academy/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/funding-breakdown-academy/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	// Full funding allocation (16 to 19: all statement variant blocks nested on same page)
	// PREVIOUS (27 JULY 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/funding-breakdown-academy/27-07-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/mat/funding-breakdown-academy/27-07-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'scenario' : req.query.scenario
		});
	});
	
	/**********
	* SERVICE & FEATURE PAGES
	* MYESF (ALLOCATION STATEMENTS)
	* **********/
	
	/**********
	* 16 TO 19 - CHILD VIEW (ALL ELIGIBLE INSTITUTIONS)
	* **********/
	
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/roles-and-permissions', function (req, res) {
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	
	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/my-roles-and-permissions', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});
	
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/all-roles-and-permissions', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	
	/**********
	* PARENT VIEW (MAT)
	* **********/
	
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/roles-and-permissions', function (req, res) {
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	
	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/my-roles-and-permissions', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});
	
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/all-roles-and-permissions', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	
	
	/* *** **** ***** **** *** *
	!!! --- !!! --- !!! --- !!!
	--->> NOTE: Code below copied from v112-0-0 allocation-statements.js 
	in order to bring GAG into v123-0-0 for rollback changes <<---
	!!! --- !!! --- !!! --- !!!
	* *** **** ***** **** *** */
	
	/**********
	* GENERAL ANNUAL GRANT - PARENT VIEW (MAT)
	* **********/
	
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/*', function (req, res, next) {				
		
		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";
		
		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// GENERAL ANNUAL GRANT (PARENT)
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/roles-and-permissions';
		
		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/start';
		
		return next();
	});
	
	
	/**********
	* SIGNED IN (EXTERNAL USERS)
	* MYESF (ALLOCATION STATEMENTS)
	* GENERAL ANNUAL GRANT - PARENT VIEW (MAT)
	* **********/
	
	// GOV.UK Entry Point
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/start', function (req, res) {
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'adultAllocations' : "true"
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dfe-sign-in/sign-in');
	});
	
	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dfe-sign-in/sign-in', function (req, res) {		
		
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;
		req.session.idams = "MAT";
		req.session.organisationName = "Mole Catch Academy";
		
		// Make sure the user enters a username and password
		if (username == "" || password == "") {				
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (password == "novalidroles") {
			
			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.gagVariant = "1";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 1 of the GAG statement
		else if (username == "1") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 2 of the GAG statement
		else if (username == "2") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "2";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 3 of the GAG statement
		else if (username == "3") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "3";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 4 of the GAG statement
		else if (username == "4") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "4";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 5 of the GAG statement
		else if (username == "5") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "5";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 6 of the GAG statement
		else if (username == "6") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "6";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 7 of the GAG statement
		else if (username == "7") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "7";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Show the user variant 8 of the GAG statement
		else if (username == "8") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "8";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		else {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');	
		}
		
	});
	
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.gagVariant = req.session.gagVariant || "1";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/access-denied', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "MAT";
			
			res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'gagVariant' : req.session.gagVariant,
				'tagType' : req.query.tagType
			});
		}
		
	});
	
	// ERROR 1 - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/access-denied', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/error-pages/access-denied', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MYESF
	// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/no-apprenticeship-service', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/allocation-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.gagVariant = req.session.gagVariant || "1";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'gagVariant' : req.session.gagVariant,			
			'organisationName' : req.session.organisationName,
			'versionB' : req.query.versionB,
			'noFilterResults' : req.query.noFilterResults,
			'nothingToView' : req.query.nothingToView
		});
	});
	
	/**********
	* GENERAL ANNUAL GRANT
	* **********/
	
	// Allocation history 
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/allocation-history', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.gagVariant = req.session.gagVariant || "1";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/allocation-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'gagVariant' : req.session.gagVariant,
			'organisationName' : req.session.organisationName
		});
	});
	
	// REDIRECT hook page used to record the tab that the user wants to view on the GAG breakdown page (e.g. school)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown/tab-choice', function (req, res) {		
		
		req.session.tab = req.query.tab;
		// Reset this variable to 0 so we can execute the dynamic tab functionality
		req.session.reloads = 0;
		var redirectURL = req.query.redirectURL;
		var gagVariant = req.session.gagVariant;
		
		if (gagVariant == "1") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-1/' + redirectURL);
		}
		else if (gagVariant == "2") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-2/' + redirectURL);
		}
		else if (gagVariant == "3") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-3/' + redirectURL);
		}
		else if (gagVariant == "4") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-4/' + redirectURL);
		}
		else if (gagVariant == "5") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-5/' + redirectURL);
		}
		else if (gagVariant == "6") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-6/' + redirectURL);
		}
		else if (gagVariant == "7") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-7/' + redirectURL);
		}
		else if (gagVariant == "8") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-8/' + redirectURL);
		}
		else {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-1/' + redirectURL);
		}
		
	});
	
	// Full funding allocation (GAG: all statement variant blocks nested on same page)
	// LATEST (12 SEPTEMBER 2021)
	
	// VARIATION 1
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-1/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-1/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// VARIATION 2
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-2/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-2/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// VARIATION 3
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-3/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-3/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// VARIATION 4
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-4/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-4/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// VARIATION 5
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-5/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-5/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// VARIATION 6
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-6/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-6/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// VARIATION 7
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-7/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-7/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// VARIATION 8
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-8/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-8/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	// Full funding allocation (GAG: all statement variant blocks nested on same page)
	// PREVIOUS (27 JULY 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-7/27-02-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/funding-breakdown-7/27-02-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab
		});
	});
	
	/**********
	* GENERAL ANNUAL GRANT - PARENT VIEW (MAT)
	* **********/
	
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	
	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/my-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});
	
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/all-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	
	
	/**********
	* GENERAL ANNUAL GRANT - CHILD VIEW (SAT)
	* **********/
	
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/*', function (req, res, next) {				
		
		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";
		
		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// GENERAL ANNUAL GRANT
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/roles-and-permissions';
		
		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/start';
		
		return next();
	});
	
	router.post('/' + version + '/signed-in/external/allocation-statements/adults/child/which-feature', function (req, res) {		
		
		req.session.feature = req.body.feature;
		var feature = req.session.feature;
		
		// Send the user to the OLD (e.g. adults) MYESF feature
		if (feature == "Adults") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/allocation-statements');
		}
		// Send the user to the NEW (e.g. GAG) MYESF feature
		else if (feature == "Pre-16 and 16 to 19") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-statements');
		}
		// Make sure the user enters a choice
		else {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/which-feature?error=true');
		}
		
	});
	
	
	/**********
	* SIGNED IN (EXTERNAL USERS)
	* MYESF (ALLOCATION STATEMENTS)
	* GENERAL ANNUAL GRANT - CHILD VIEW (SAT)
	* **********/
	
	// GOV.UK Entry Point
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/start', function (req, res) {
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'adultAllocations' : "true"
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dfe-sign-in/sign-in');
	});
	
	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dfe-sign-in/sign-in', function (req, res) {		
		
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;
		req.session.idams = "SAT";
		req.session.organisationName = "Mole Catch Academy";
		
		// Make sure the user enters a username and password
		if (username == "" || password == "") {				
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (password == "novalidroles") {
			
			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.gagVariant = "1";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 1 of the GAG statement
		else if (username == "1") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 2 of the GAG statement
		else if (username == "2") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "2";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 3 of the GAG statement
		else if (username == "3") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "3";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 4 of the GAG statement
		else if (username == "4") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "4";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 5 of the GAG statement
		else if (username == "5") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "5";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 6 of the GAG statement
		else if (username == "6") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "6";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 7 of the GAG statement
		else if (username == "7") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "7";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 8 of the GAG statement
		else if (username == "8") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "8";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// TEMPORARY (MYESF feature switch in live)
		// Show the MYESF team the design for the hybrid old (e.g. adults) vs new (e.g. GAG) allocation statements feature
		else if (username == "hybrid") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";
			req.session.hybrid = "True";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		else {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');	
		}
		
	});
	
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.gagVariant = req.session.gagVariant || "1";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/access-denied', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "SAT";
			
			res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'gagVariant' : req.session.gagVariant,
				'tagType' : req.query.tagType,
				'hybrid' : req.session.hybrid
			});
		}
		
	});
	
	// ERROR 1 - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/access-denied', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/error-pages/access-denied', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MYESF
	// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/no-apprenticeship-service', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// TEMPORARY (MYESF feature switch in live)
	// Which feature
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/which-feature', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.gagVariant = req.session.gagVariant || "1";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/which-feature', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'gagVariant' : req.session.gagVariant,
			'organisationName' : req.session.organisationName,
			'tagTypeA' : req.query.tagTypeA,
			'tagTypeB' : req.query.tagTypeB,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/which-feature', function (req, res) {		
		
		req.session.feature = req.body.feature;
		var feature = req.session.feature;
		
		// Send the user to the OLD MYESF feature (e.g. adults)
		if (feature == "Adults") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/allocation-statements');
		}
		// Send the user to the NEW MYESF feature (e.g. GAG)
		else if (feature == "Pre-16 and 16 to 19") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-statements');
		}
		// Make sure the user enters a choice
		else {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/which-feature?error=true');
		}
		
	});
	
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.gagVariant = req.session.gagVariant || "1";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'gagVariant' : req.session.gagVariant,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	/**********
	* GENERAL ANNUAL GRANT
	* **********/
	
	// Allocation history
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-history', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.gagVariant = req.session.gagVariant || "1";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-history', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'gagVariant' : req.session.gagVariant,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	// REDIRECT hook page used to record the tab that the user wants to view on the GAG breakdown page (e.g. school)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown/tab-choice', function (req, res) {		
		
		req.session.tab = req.query.tab;
		// Reset this variable to 0 so we can execute the dynamic tab functionality
		req.session.reloads = 0;
		var redirectURL = req.query.redirectURL;
		var gagVariant = req.session.gagVariant;
		
		if (gagVariant == "1") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-1/' + redirectURL);
		}
		else if (gagVariant == "2") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-2/' + redirectURL);
		}
		else if (gagVariant == "3") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-3/' + redirectURL);
		}
		else if (gagVariant == "4") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-4/' + redirectURL);
		}
		else if (gagVariant == "5") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-5/' + redirectURL);
		}
		else if (gagVariant == "6") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-6/' + redirectURL);
		}
		else if (gagVariant == "7") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-7/' + redirectURL);
		}
		else if (gagVariant == "8") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-8/' + redirectURL);
		}
		else {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-1/' + redirectURL);
		}
		
	});
	
	// Full funding allocation (GAG: all statement variant blocks nested on same page)
	// LATEST (12 SEPTEMBER 2021)
	
	// VARIATION 1
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-1/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-1/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// VARIATION 2
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-2/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-2/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// VARIATION 3
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-3/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-3/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// VARIATION 4
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-4/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-4/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// VARIATION 5
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-5/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-5/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// VARIATION 6
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-6/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-6/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// VARIATION 7
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-7/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-7/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// VARIATION 8
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-8/12-09-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-8/12-09-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	// Full funding allocation (GAG: all statement variant blocks nested on same page)
	// PREVIOUS (27 JULY 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-7/27-02-2021', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/funding-breakdown-7/27-02-2021', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'reloads' : req.session.reloads,
			'scenario' : req.query.scenario,
			'tab' : req.session.tab,
			'feature' : req.session.feature
		});
	});
	
	
	/**********
	* GENERAL ANNUAL GRANT - CHILD VIEW (SAT)
	* **********/
	
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	
	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/my-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});
	
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/all-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	
	
	/**********
	* SIGNED IN (EXTERNAL USERS)
	* MYESF (ALLOCATION STATEMENTS)
	* ADULTS - CHILD VIEW (SCHOOL & SINGLE ACADEMY)
	* **********/
	
	// GOV.UK Entry Point
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/start', function (req, res) {
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'adultAllocations' : "true"
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/adults/child/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dfe-sign-in/sign-in');
	});
	
	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/adults/child/dfe-sign-in/sign-in', function (req, res) {		
		
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;
		req.session.idams = "SAT";
		req.session.organisationName = "Mole Catch Academy";
		
		// Make sure the user enters a username and password
		if (username == "" || password == "") {				
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (password == "novalidroles") {
			
			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');
		}
		// TEMPORARY (MYESF feature switch in live)
		// Show the MYESF team the design for the hybrid old (e.g. adults) vs new (e.g. GAG) allocation statements feature
		else if (username == "hybrid") {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.hybrid = "True";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		else {
			
			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.hybrid = "False";
			req.session.feature = "";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');	
		}
		
	});
	
	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.dashboard = "No";
			
			res.render(version + '/error-pages/access-denied', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'idams' : req.session.idams
			});
		}
		// Take users to the standard dashbord
		else {
			
			req.session.dashboard = "Yes";
			// Only set the session variable if it does not exist
			req.session.idams = req.session.idams || "SAT";
			
			res.render(version + '/signed-in/external/allocation-statements/adults/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage,
				'tagType' : req.query.tagType,
				'hybrid' : req.session.hybrid
			});
		}
		
	});
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/index', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/index', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	// ERROR 1 - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/access-denied', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/error-pages/access-denied', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MYESF
	// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/no-apprenticeship-service', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});
	
	// TEMPORARY (MYESF feature switch in live)
	// Which feature
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/which-feature', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/which-feature', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'tagTypeA' : req.query.tagTypeA,
			'tagTypeB' : req.query.tagTypeB,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/allocation-statements/adults/child/which-feature', function (req, res) {		
		
		req.session.feature = req.body.feature;
		var feature = req.session.feature;
		
		// Send the user to the OLD (e.g. adults) MYESF feature
		if (feature == "Adults") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/allocation-statements');
		}
		// Send the user to the NEW (e.g. GAG) MYESF feature
		else if (feature == "Pre-16 and 16 to 19") {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-statements');
		}
		// Make sure the user enters a choice
		else {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/which-feature?error=true');
		}
		
	});
	
	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/allocation-statements', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	// Allocation statements latest
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/allocation-statements-latest', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/allocation-statements-latest', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	// 16 to 18 traineeships for 2018 to 2019
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/16-18-traineeships-old', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/16-18-traineeships-old', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	// 16 to 18 traineeships for 2022 to 2023
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/16-18-traineeships-latest', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/16-18-traineeships-latest', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	// 19-24 tarineeships for 2022 to 2023
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/19-24-traineeships-latest', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/19-24-traineeships-latest', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	// Non-levy apprenticeship funding 
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/non-levy-apprenticeship-funding-latest', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/non-levy-apprenticeship-funding-latest', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	// Non-levy apprenticeship funding 
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/non-levy-apprenticeship-funding', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/non-levy-apprenticeship-funding', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	// Apprenticeship carry-in for 2018 to 2019
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/apprenticeship-carry-in-details', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/apprenticeship-carry-in-details', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	//Apprenticeship carry-in latest
	
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/apprenticeship-carry-in-details-latest', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/apprenticeship-carry-in-details-latest', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	// ESFA adult education budget 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v2', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'interimDesign' : req.query.interimDesign,
			'feature' : req.session.feature
		});
	});
	
	// ESFA adult education budget 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v1', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'interimDesign' : req.query.interimDesign,
			'feature' : req.session.feature
		});
	});
	
	// ESFA adult education budget grant 2022 to 2023 (latest v2)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/aeb-budget-grant-v2', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/aeb-budget-grant-v2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'interimDesign' : req.query.interimDesign,
			'feature' : req.session.feature
		});
	});
	
	// ESFA adult education budget grant 2022 to 2023 (latest v1)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/aeb-budget-grant', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/aeb-budget-grant', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'interimDesign' : req.query.interimDesign,
			'feature' : req.session.feature
		});
	});
	
	// ESFA adult education budget contract for services 2022 to 2023 (latest)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/aeb-budget-contract-services', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/aeb-budget-contract-services', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'interimDesign' : req.query.interimDesign,
			'feature' : req.session.feature
		});
	});
	
	
	// Advanced learner loans latest	
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-latest', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-latest', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	// Advanced learner loans for 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v2', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	// Advanced learner loans for 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v1', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Mole Catch Academy";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'organisationName' : req.session.organisationName,
			'feature' : req.session.feature
		});
	});
	
	/**********
	* SERVICE & FEATURE PAGES
	* MYESF (ALLOCATION STATEMENTS)
	* **********/
	
	/**********
	* ADULTS - CHILD VIEW (SCHOOL & SINGLE ACADEMY)
	* **********/
	
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	
	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/my-roles-and-permissions', function (req, res) {		
		
		req.session.idams = "adults";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});
	
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/all-roles-and-permissions', function (req, res) {		
		
		req.session.idams = "adults";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	
	/**********
	* GENERAL ANNUAL GRANT - CHILD VIEW (SAT)
	* **********/
	
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	
	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/my-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});
	
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/all-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "SAT";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	
	/**********
	* GENERAL ANNUAL GRANT - PARENT VIEW (MAT)
	* **********/
	
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	
	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/my-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});
	
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/all-roles-and-permissions', function (req, res) {		
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	
	router.post('/beta/v126-0-0/signed-in/subcontractor-flow/do-you-use-subcontractors', function (req, res) {
		let answer = req.body.useSubcontractors;
		if (answer === 'no') {
			res.redirect('/beta/v126-0-0/signed-in/subcontractor-flow/not-subcontracting')
		} else {
			res.redirect('/beta/v126-0-0/signed-in/subcontractor-flow/before-you-start');
		}
	});
	
	
}

