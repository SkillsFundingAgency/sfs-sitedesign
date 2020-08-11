module.exports = function(router) {
	
	var version = 'beta/v114-0-0';
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
	* 14 TO 16 - PARENT VIEW (LA, MAT)
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
	* 16 TO 19 - PARENT VIEW (LA, MAT)
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
			'scenario' : req.query.scenario
		});
	});

	// Full funding allocation (14 to 16: all statement variant blocks nested on same page)
	// PREVIOUS (27 JULY 2021)
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/27-02-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/child/funding-breakdown/27-02-2021', {
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
	* 14 TO 16 - PARENT VIEW (LA, MAT)
	* **********/

	// Allocation history
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/allocation-history', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "LA";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/parent/allocation-history', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/funding-breakdown/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/parent/funding-breakdown/12-09-2021', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/14-to-16/parent/funding-breakdown/27-02-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/14-to-16/parent/funding-breakdown/27-02-2021', {
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
		req.session.idams = "other";
		req.session.organisationName = "Casterbridge College";

		// Make sure the user enters a username and password
		if (username == "" || password == "") {				
			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dfe-sign-in/sign-in?error=true');
		}
		// TRIGGER ERROR 1 - User has no valid MYESF roles
		else if (password == "novalidroles") {

			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "1";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.sixteenToNineteenVariant = "1";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 0 (2019 to 2020 HESA full year students)
		/* else if (username == "0") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "0";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		} */
		// Show the user variant 1 (2019 to 2020 ILR R14 full year students)
		else if (username == "1") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "1";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 1a (2020 to 2021 R04 students)
		// A/B TESTING (Version A)
		else if (username == "1a") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "1a";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 1b (2020 to 2021 R04 students)
		// A/B TESTING (Version B)
		else if (username == "1b") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "1b";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 2 (2020 to 2021 ILR R06 students)
		else if (username == "2") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "2";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 3 (2020 to 2021 R04 students)
		else if (username == "3") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "3";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 4 (autumn census)
		else if (username == "4") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "4";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 5 (ILR hybrid students)
		else if (username == "5") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "5";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 6 (ILR rolling 12 months students)
		else if (username == "6") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "6";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 7 (R46 students)
		else if (username == "7") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "7";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 8 (year 1 business case students)
		else if (username == "8") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "8";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 9 (year 2 business case students)
		else if (username == "9") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "9";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 10 (academy estimates)
		else if (username == "10") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "10";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Show the user variant 11 (NMSS) for a Non Maintained Special School (NMSS)
		else if (username == "nmss") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "NMSS";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		// DEFAULT to variant 1a (2020 to 2021 R04 students)
		else {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "1a";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard');	
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/dashboard', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "1a";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";

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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/access-denied', function (req, res) {

		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		
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
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "1a";
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

	/**********
	* 16 TO 19
	* **********/

	// Allocation history
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/allocation-history', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "1a";
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

	// Full funding allocation (16 to 19: all statement variant blocks nested on same page)
	// LATEST (12 SEPTEMBER 2021)

	// VARIATION 1
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1/12-09-2021', {
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

	// VARIATION 1A
	// A/B TESTING (Version A)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-programme-formula', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-programme-formula', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-condition-of-funding', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-condition-of-funding', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-care-standards', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-care-standards', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-formula-protection', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-formula-protection', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-high-needs', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-high-needs', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-student-financial-support', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-student-financial-support', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-industry-placement', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-industry-placement', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-advanced-maths', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-advanced-maths', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-high-value', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-high-value', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-teachers-pension', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-teachers-pension', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-alternative-completion', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-a/12-09-2021-alternative-completion', {
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

	// VARIATION 1B
	// A/B TESTING (Version B)
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-b/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1-version-b/12-09-2021', {
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

	// VARIATION 2
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-2/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-2/12-09-2021', {
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

	// VARIATION 3
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-3/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-3/12-09-2021', {
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

	// VARIATION 4
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-4/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-4/12-09-2021', {
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

	// VARIATION 5
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-5/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-5/12-09-2021', {
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

	// VARIATION 6
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-6/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-6/12-09-2021', {
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

	// VARIATION 7
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-7/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-7/12-09-2021', {
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

	// VARIATION 8
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-8/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-8/12-09-2021', {
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

	// VARIATION 9
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-9/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-9/12-09-2021', {
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

	// VARIATION 10
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-10/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-10/12-09-2021', {
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

	// NMSS
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-nmss/12-09-2021', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1/27-07-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Casterbridge College";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/child/funding-breakdown-1/27-07-2021', {
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
	* 16 TO 19 - PARENT VIEW (LA, MAT)
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
		else if (password == "novalidroles") {

			req.session.hasValidRoles = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "LA";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		// TRIGGER ERROR 2 - Show to users when they are not permitted to access the apprenticeship service due to:
		// REASON 1: User has not signed their apprenticeship agreement in MYESF
		// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
		else if (password == "noapprenticeshipservice") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "True";
			req.session.sixteenToNineteenVariant = "LA";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		// Show users the LA view
		else if (username == "la") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "LA";
			req.session.idams = "LA";
			req.session.organisationName = "Redhill Council";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		// Show users the MAT view
		else if (username == "mat") {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "MAT";
			req.session.idams = "MAT";
			req.session.organisationName = "Rupert Shoggins Academy Trust";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');
		}
		// Anything else take user to dashboard with valid MYESF roles
		// DEFAULT to LA view
		else {

			req.session.hasValidRoles = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.sixteenToNineteenVariant = "LA";
			req.session.idams = "LA";
			req.session.organisationName = "Redhill Council";

			res.redirect('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard');	
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/dashboard', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.hasValidRoles = req.session.hasValidRoles || "True";
		req.session.noApprenticeshipServicePage = req.session.noApprenticeshipServicePage || "False";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "LA";
		req.session.organisationName = req.session.organisationName || "Redhill Council";

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
			req.session.idams = req.session.idams || "LA";

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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/access-denied', function (req, res) {

		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/no-apprenticeship-service', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/allocation-statements', function (req, res) {

		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "LA";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/allocation-statements', {
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
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/allocation-history', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.sixteenToNineteenVariant = req.session.sixteenToNineteenVariant || "LA";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/allocation-history', {
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

	// LA
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-la/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-la/12-09-2021', {
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

	// MAT
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-mat/12-09-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-mat/12-09-2021', {
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

	// LA
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-la/27-07-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-la/27-07-2021', {
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

	// MAT
	router.get('/' + version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-mat/27-07-2021', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "LA";
		req.session.dashboard = req.session.dashboard || "No";
		req.session.organisationName = req.session.organisationName || "Redhill Council";
		
		res.render(version + '/signed-in/external/allocation-statements/16-to-19/parent/funding-breakdown-mat/27-07-2021', {
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
	* PARENT VIEW (LA, MAT)
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
		req.session.idams = req.session.idams || "LA";
		
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
		req.session.idams = req.session.idams || "LA";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

}
