module.exports = function(router) {
	
	var version = 'beta/v108-0-0';

	/**********
	* GLOBAL
	* **********/

	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/child/allocation-statements/*', function (req, res, next) {				

		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";

		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// ADULTS
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/child/allocation-statements/adults/roles-and-permissions';

		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/child/allocation-statements/adults/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/child/allocation-statements/adults/start';

		return next();
	});

	/**********
	* ADULTS
	* **********/

	// GOV.UK Entry Point
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/start', function (req, res) {
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'adultAllocations' : "true"
		});
	});
	router.post('/' + version + '/signed-in/external/child/allocation-statements/adults/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in');
	});

	// IDAMS
	// LEGACY but left in to show what it should look like
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/idams/sign-in', function (req, res) {
		res.render(version + '/idams/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});
	router.post('/' + version + '/signed-in/external/child/allocation-statements/adults/idams/sign-in', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
	});

	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in', function (req, res) {		
		
		// req.session.username = req.body.username.toLowerCase();
		// var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;

		// SCENARIO 1 - Do not set the switch so users can directly access the apprenticeship service after clicking the tile
		if (password == "11111111") {
			
			req.session.signIntoAnotherServicePage = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.hasValidRoles = "True";
			
			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
		}
		// SCENARIO 2 - Set the switch so users see the apprenticeship service information page ("sign-into-another-service")
		else if (password == "22222222") {

			req.session.signIntoAnotherServicePage = "True";
			req.session.noApprenticeshipServicePage = "False";
			req.session.hasValidRoles = "True";

			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
		}
		// SCENARIO 3 - Set the switch so users see the no apprenticeship service page ("no-apprenticeship-service")
		else if (password == "33333333") {

			req.session.signIntoAnotherServicePage = "False";
			req.session.noApprenticeshipServicePage = "True";
			req.session.hasValidRoles = "True";

			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
		}
		// SCENARIO 4 - Trigger and show users the no MyESF roles page
		else if (password == "44444444") {

			req.session.signIntoAnotherServicePage = "False";
			req.session.noApprenticeshipServicePage = "False";
			req.session.hasValidRoles = "False";

			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in?error=true');	
		}
		
	});

	// DfE Sign-in (ERROR 1: ACCESS DENIED) - Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/access-denied', function (req, res) {
		res.render(version + '/error-pages/access-denied', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard', function (req, res) {
	
		// Trigger an unsuccessfull sign in with no valid MyESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			
			req.session.idams = "adults";
			
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

			res.render(version + '/signed-in/external/child/allocation-statements/dashboard', {
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

	// TEMPORARY (while other ESFA services wait to use DfE Sign-in)
	// Show this page to users to warn them they will need to sign in with IdAMS to access this service
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/sign-into-another-service', function (req, res) {
		
		req.session.idams = "adults";
		
		res.render(version + '/error-pages/sign-into-another-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MyESF
	// REASON 2: User as not signed their apprenticeship agreement in MyESF AND does not have the required role in MyESF to sign it
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/no-apprenticeship-service', function (req, res) {
		
		req.session.idams = "adults";
		
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Allocation statements
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/allocation-statement-list', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/allocation-statement-list', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// 16 to 18 traineeships for 2018 to 2019
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/16-to-18-traineeships', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/16-to-18-traineeships', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Apprenticeship carry-in for 2018 to 2019
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/apprenticeship-carry-in-details', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/apprenticeship-carry-in-details', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// ESFA adult education budget 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// ESFA adult education budget 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Advanced learner loans for 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v2', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Advanced learner loans for 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v1', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	/**********
	* MYESF SERVICE PAGES
	* **********/

	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});

	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/my-roles-and-permissions', function (req, res) {		
		
		req.session.idams = "adults";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});

	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/all-roles-and-permissions', function (req, res) {		
		
		req.session.idams = "adults";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

}
