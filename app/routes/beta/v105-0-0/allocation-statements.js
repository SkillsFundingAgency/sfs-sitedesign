module.exports = function(router) {
	
	var version = 'beta/v105-0-0';

	/**********
	 * ADULTS
	 * **********/

	// GOV.UK Entry Point
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/start', function (req, res) {
		res.render(version + '/start', {
			'version' : version
		});
	});
	router.post('/' + version + '/signed-in/external/child/allocation-statements/adults/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/child/allocation-statements/adults/dfe-sign-in/sign-in');
	});

	// User roles and permissions 
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/roles-and-permissions', function (req, res) {
		res.render(version + '/roles-and-permissions', {
			'version' : version
		});
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

		// USER RESEARCH TASK 1 - Trigger a successfull sign in with no valid MyESF roles or permissions
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
		
		res.render(version + '/signed-in/external/child/allocation-statements/dashboard', {
			'version' : version,
			'idams' : req.session.idams,
			'apprenticeshipServiceAccess' : req.query.apprenticeshipServiceAccess
		});
	});

	// Allocation statements
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/allocation-statement-list', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/allocation-statement-list', {
			'version' : version,
			'idams' : req.session.idams
		});
	});

	// 16 to 18 traineeships for 2018 to 2019
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/16-to-18-traineeships', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/16-to-18-traineeships', {
			'version' : version,
			'idams' : req.session.idams
		});
	});

	// Apprenticeship carry-in for 2018 to 2019
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/apprenticeship-carry-in-details', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/apprenticeship-carry-in-details', {
			'version' : version,
			'idams' : req.session.idams
		});
	});

	// ESFA adult education budget 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v2', {
			'version' : version,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign 
		});
	});

	// ESFA adult education budget 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/esfa-adult-education-budget-details-v1', {
			'version' : version,
			'idams' : req.session.idams,
			'interimDesign' : req.query.interimDesign
		});
	});

	// Advanced learner loans for 2018 to 2019 (v2)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v2', {
			'version' : version,
			'idams' : req.session.idams
		});
	});

	// Advanced learner loans for 2018 to 2019 (v1)
	router.get('/' + version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/signed-in/external/child/allocation-statements/adults/advanced-learner-loan-details-v1', {
			'version' : version,
			'idams' : req.session.idams
		});
	});

}
