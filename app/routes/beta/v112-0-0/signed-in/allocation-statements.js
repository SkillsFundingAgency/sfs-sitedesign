module.exports = function(router) {
	
	var version = 'beta/v112-0-0';

	/**********
	* GLOBAL VARIABLES
	* MYESF (ALLOCATION STATEMENTS)
	* **********/

	/**********
	* ADULTS - CHILD VIEW (SCHOOL & SINGLE ACADEMY)
	* **********/

	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/*', function (req, res, next) {				

		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";

		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// ADULTS
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/adults/child/roles-and-permissions';

		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/allocation-statements/adults/child/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/allocation-statements/adults/child/start';

		return next();
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
		
		// Make sure the user enters a username and password
		if (username == "" || password == "") {				
			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (password == "novalidroles") {

			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		else {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');	
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard', function (req, res) {
	
		// Trigger an unsuccessfull sign in with no valid MYESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.idams = "adults";
			
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

			req.session.idams = "dashboard";

			res.render(version + '/signed-in/external/allocation-statements/adults/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage
			});
		}
		
	});

	// ERROR 1 - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/access-denied', function (req, res) {
		res.render(version + '/error-pages/access-denied', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MYESF
	// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/no-apprenticeship-service', function (req, res) {
		
		req.session.idams = "adults";
		
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/allocation-statements', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/allocation-statements', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'noFilterResults' : req.query.noFilterResults
		});
	});

	// 16 to 18 traineeships for 2018 to 2019
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/16-to-18-traineeships', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/16-to-18-traineeships', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// Apprenticeship carry-in for 2018 to 2019
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/apprenticeship-carry-in-details', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/apprenticeship-carry-in-details', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// ESFA adult education budget 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign
		});
	});

	// ESFA adult education budget 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/esfa-adult-education-budget-details-v1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign
		});
	});

	// Advanced learner loans for 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// Advanced learner loans for 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/advanced-learner-loan-details-v1', {
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

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 1 of the GAG statement
		else if (username == "1") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 2 of the GAG statement
		else if (username == "2") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "2";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 3 of the GAG statement
		else if (username == "3") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "3";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 4 of the GAG statement
		else if (username == "4") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "4";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 5 of the GAG statement
		else if (username == "5") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "5";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 6 of the GAG statement
		else if (username == "6") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "6";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 7 of the GAG statement
		else if (username == "7") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "7";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Show the user variant 8 of the GAG statement
		else if (username == "8") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "8";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		else {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.gagVariant = "1";

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
			'organisationName' : req.session.organisationName
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
			'organisationName' : req.session.organisationName
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
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
			'tab' : req.session.tab
		});
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

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";

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
				'tagType' : req.query.tagType,
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
			'noFilterResults' : req.query.noFilterResults
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

}
