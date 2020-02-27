module.exports = function(router) {
	
	var version = 'beta/v109-0-0';

	/**********
	* GLOBAL
	* **********/

	/*** ADULT ***/
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

	/*** GENERAL ANNUAL GRANT (CHILD) ***/
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

	/*** GENERAL ANNUAL GRANT (PARENT) ***/
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
	* ADULTS
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
		// TRIGGER ERROR 1 - User has no valid MyESF roles
		else if (password == "novalidroles") {

			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MyESF
		// REASON 2: User as not signed their apprenticeship agreement in MyESF AND does not have the required role in MyESF to sign it
		else if (password == "noapprenticeshipservice") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');
		}
		// Anything else take user to dashboard with valid MyESF roles
		else {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard');	
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/dashboard', function (req, res) {
	
		// Trigger an unsuccessfull sign in with no valid MyESF roles or permissions
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
	// REASON 1: User has not signed their apprenticeship agreement in MyESF
	// REASON 2: User as not signed their apprenticeship agreement in MyESF AND does not have the required role in MyESF to sign it
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
	router.get('/' + version + '/signed-in/external/allocation-statements/adults/child/allocation-statement-list', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/adults/child/allocation-statement-list', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
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
	* MYESF SERVICE PAGES
	* ADULTS
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
	* GENERAL ANNUAL GRANT (CHILD)
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
		
		// req.session.username = req.body.username.toLowerCase();
		// var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;

		// SCENARIO 1 - Do not set the switch so users can directly access the apprenticeship service after clicking the tile
		if (password == "") {
			
			req.session.signIntoAnotherServicePage = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.hasValidRoles = "True";
			
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard');
		}

		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dfe-sign-in/sign-in?error=true');	
		}
		
	});

	// DfE Sign-in (ERROR 1: ACCESS DENIED) - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/access-denied', function (req, res) {
		res.render(version + '/error-pages/access-denied', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/dashboard', function (req, res) {
	
		// Trigger an unsuccessfull sign in with no valid MyESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.idams = "general-annual-grant";
			
			res.render(version + '/error-pages/access-denied', {
				'version' : version,
				'versioning' : req.session.versioning,
				'idams' : req.session.idams,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL
			});
		}
		// Take users to the dashbord
		else {

			req.session.idams = "dashboard";

			res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'idams' : req.session.idams,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'signIntoAnotherServicePage' : req.session.signIntoAnotherServicePage,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage
			});
		}
		
	});

	// Allocation statements
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-statement-list', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/child/allocation-statement-list', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	/**********
	* MYESF SERVICE PAGES
	* GENERAL ANNUAL GRANT (CHILD)
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
		
		req.session.idams = "general-annual-grant";
		
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
		
		req.session.idams = "general-annual-grant";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	/**********
	* GENERAL ANNUAL GRANT (PARENT)
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

		// Make sure the user enters a username and password
		if (username == "" || password == "") {				
			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MyESF roles
		else if (password == "novalidroles") {

			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MyESF
		// REASON 2: User as not signed their apprenticeship agreement in MyESF AND does not have the required role in MyESF to sign it
		else if (password == "noapprenticeshipservice") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');
		}
		// Anything else take user to dashboard with valid MyESF roles
		else {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard');	
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/dashboard', function (req, res) {

		// Trigger an unsuccessfull sign in with no valid MyESF roles or permissions
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
			req.session.hasValidRoles = req.session.hasValidRoles || "True";
			req.session.idams = req.session.idams || "MAT";

			res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/dashboard', {
				'version' : version,
				'versioning' : req.session.versioning,
				'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
				'signOutURL' : req.session.signOutURL,
				'dashboard' : req.session.dashboard,
				'idams' : req.session.idams,
				'noApprenticeshipServicePage' : req.session.noApprenticeshipServicePage
			});
		}
		
	});

	// ERROR 1 - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/access-denied', function (req, res) {
	
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
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
	// REASON 1: User has not signed their apprenticeship agreement in MyESF
	// REASON 2: User as not signed their apprenticeship agreement in MyESF AND does not have the required role in MyESF to sign it
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/no-apprenticeship-service', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
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

	// Select academy or school
	router.get('/' + version + '/signed-in/external/allocation-statements/general-annual-grant/parent/select-academy-or-school', function (req, res) {

		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.idams = req.session.idams || "MAT";
		
		res.render(version + '/signed-in/external/allocation-statements/general-annual-grant/parent/select-academy-or-school', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams
		});
	});

	/**********
	* MYESF SERVICE PAGES
	* GENERAL ANNUAL GRANT (PARENT)
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
		req.session.parent = req.session.parent || "MAT";
		
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
		req.session.parent = req.session.parent || "MAT";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

}
