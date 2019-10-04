module.exports = function(router) {
	
	var version = 'beta/v105-0-0';

	/**********
	 * GLOBAL
	 * **********/

	// Ensure that the default public service name is NOT set
	router.get('/' + version + '/signed-in/external/child/allocation-statements/*', function (req, res, next) {				
		
		// Set the unique related URLs for this feature journey
		// ALLOCATION STATEMENTS
		// ADULTS
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/child/allocation-statements/adults/roles-and-permissions';
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
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL
		});
	});
	router.post('/' + version + '/signed-in/external/child/allocation-statements/adults/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in');
	});

	// IDAMS
	// LEGACY but left in to show what it should look like
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/idams/sign-in', function (req, res) {
		res.render(version + '/idams/sign-in', {
			'version' : version
		});
	});
	router.post('/' + version + '/signed-in/external/child/allocation-statements/adults/idams/sign-in', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
	});

	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in', function (req, res) {		
		
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;
		req.session.password = req.body.password.toLowerCase();
		var password = req.session.password;

		// USER RESEARCH TASK 1 - Trigger an unsuccessfull sign in with no valid MyESF roles or permissions
		if (username == "billshoggins" && password == "11111111") {
			
			req.session.hasValidRoles = "False";
			
			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
		}
		// USER RESEARCH TASK 2 - Trigger a successfull sign in with 1 or more valid MyESF roles or permissions
		else if (username == "billshoggins" && password == "22222222") {

			req.session.hasValidRoles = "True";

			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in?error=true');	
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/dashboard', function (req, res) {
	
		req.session.idams = "dashboard";

		// USER RESEARCH TASK 1 - Trigger an unsuccessfull sign in with no valid MyESF roles or permissions
		if (req.session.hasValidRoles == "False") {
			res.render(version + '/error-pages/access-denied', {
				'version' : version,
				'idams' : req.session.idams,
				'signOutURL' : req.session.signOutURL
			});
		}
		// Take users to the dashbord
		else {
			res.render(version + '/signed-in/external/child/allocation-statements/dashboard', {
				'version' : version,
				'idams' : req.session.idams,
				'apprenticeshipServiceAccess' : req.query.apprenticeshipServiceAccess,
				'signOutURL' : req.session.signOutURL
			});
		}
		
	});

	// Allocation statements
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/allocation-statement-list', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/allocation-statement-list', {
			'version' : version,
			'idams' : req.session.idams,
			'signOutURL' : req.session.signOutURL
		});
	});

	// 16 to 18 traineeships for 2018 to 2019
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/16-to-18-traineeships', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/16-to-18-traineeships', {
			'version' : version,
			'idams' : req.session.idams,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Apprenticeship carry-in for 2018 to 2019
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/apprenticeship-carry-in-details', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/apprenticeship-carry-in-details', {
			'version' : version,
			'idams' : req.session.idams,
			'signOutURL' : req.session.signOutURL
		});
	});

	// ESFA adult education budget 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v2', {
			'version' : version,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign,
			'signOutURL' : req.session.signOutURL
		});
	});

	// ESFA adult education budget 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v1', {
			'version' : version,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Advanced learner loans for 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v2', {
			'version' : version,
			'idams' : req.session.idams,
			'signOutURL' : req.session.signOutURL
		});
	});

	// Advanced learner loans for 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v1', {
			'version' : version,
			'idams' : req.session.idams,
			'signOutURL' : req.session.signOutURL
		});
	});

	/**********
	 * MYESF SERVICES PAGES
	 * **********/

	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL
		});
	});

	// SIGNED IN
	// Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/access-denied', function (req, res) {
		res.render(version + '/error-pages/access-denied', {
			'version' : version,
			'idams' : req.session.idams,
			'signOutURL' : req.session.signOutURL
		});
	});
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/my-roles-and-permissions', function (req, res) {		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/my-roles-and-permissions', {
			'version' : version,
			'signOutURL' : req.session.signOutURL
		});
	});
	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/all-roles-and-permissions', function (req, res) {		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/all-roles-and-permissi', {
			'version' : version,
			'signOutURL' : req.session.signOutURL
		});
	});

}
