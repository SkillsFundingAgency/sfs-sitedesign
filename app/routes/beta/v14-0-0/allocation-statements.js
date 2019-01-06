module.exports = function(router) {

	var version = 'beta/v14-0-0';
	var disclaimerVersion = 'v14-0-0';

	/**********
	 * ADULTS
	 * **********/

	// GOV.UK Entry Point
	router.get('/' + version + '/allocation-statements/adults/start', function (req, res) {
		
		req.session.disclaimerAccepted = "No";

		res.render(version + '/start', {
			'version' : version
		});
	});
	router.post('/' + version + '/allocation-statements/adults/start', function (req, res) {		
		res.redirect('/' + version + '/allocation-statements/adults/idams');
	});

	// IDAMS
	router.get('/' + version + '/allocation-statements/adults/idams', function (req, res) {
		res.render(version + '/idams', {
			'version' : version
		});
	});
	router.post('/' + version + '/allocation-statements/adults/idams', function (req, res) {		
		res.redirect('/' + version + '/allocation-statements/adults/dashboard');
	});

	// Dashboard
	router.get('/' + version + '/allocation-statements/adults/dashboard', function (req, res) {
	
		req.session.idams = "dashboard";
		
		res.render(version + '/allocation-statements/dashboard', {
			'version' : version,
			'idams' : req.session.idams,
			// 'disclaimerAccepted' : req.session.disclaimerAccepted,
			// 'disclaimerVersion' : disclaimerVersion
		});
	});

	// Disclaimer
	/*
	router.get('/' + version + '/allocation-statements/adults/disclaimer', function (req, res) {
	
		req.session.idams = "adults";

		if (req.session.disclaimerAccepted == "Yes") {
			res.render(version + '/allocation-statements/adults/allocation-statement-list', {
				'idams' : req.session.idams,
				'disclaimerAccepted' : req.session.disclaimerAccepted,
				'disclaimerVersion' : disclaimerVersion
			});
		}
		else {
			res.render(version + '/allocation-statements/adults/disclaimer', {
				'idams' : req.session.idams
			});
		}
		
	});
	router.post('/' + version + '/allocation-statements/adults/disclaimer', function (req, res) {		
		
		req.session.disclaimerAccepted = "Yes";
		
		res.redirect('/' + version + '/allocation-statements/adults/allocation-statement-list');
	});
	*/

	// Disclaimer (Accepted)
	/*
	router.get('/' + version + '/allocation-statements/adults/disclaimer-accepted', function (req, res) {

		req.session.idams = "adults";

		res.render(version + '/allocation-statements/adults/disclaimer-accepted', {
			'idams' : req.session.idams,
			'disclaimerAccepted' : req.session.disclaimerAccepted,
			'disclaimerVersion' : disclaimerVersion
		});
	});
	*/

	// Allocation statements
	router.get('/' + version + '/allocation-statements/adults/allocation-statement-list', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/allocation-statement-list', {
			'version' : version,
			'idams' : req.session.idams,
			// 'disclaimerAccepted' : req.session.disclaimerAccepted,
			// 'disclaimerVersion' : disclaimerVersion
		});
	});

	// Carry-in apprenticeship for 2018 to 2019
	router.get('/' + version + '/allocation-statements/adults/carry-in-apprenticeship-details', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/carry-in-apprenticeship-details', {
			'version' : version,
			'idams' : req.session.idams,
			// 'disclaimerAccepted' : req.session.disclaimerAccepted,
			// 'disclaimerVersion' : disclaimerVersion
		});
	});

	// Adult Education Budget 2018 to 2019 (v2)
	router.get('/' + version + '/allocation-statements/adults/adult-education-budget-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/adult-education-budget-details-v2', {
			'version' : version,
			'idams' : req.session.idams,
			// 'disclaimerAccepted' : req.session.disclaimerAccepted,
			// 'disclaimerVersion' : disclaimerVersion
		});
	});

	// Adult Education Budget 2018 to 2019 (v1)
	router.get('/' + version + '/allocation-statements/adults/adult-education-budget-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/adult-education-budget-details-v1', {
			'version' : version,
			'idams' : req.session.idams,
			// 'disclaimerAccepted' : req.session.disclaimerAccepted,
			// 'disclaimerVersion' : disclaimerVersion
		});
	});

	// Advanced learner loans for 2018 to 2019 (v2)
	router.get('/' + version + '/allocation-statements/adults/advanced-learner-loan-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/advanced-learner-loan-details-v2', {
			'version' : version,
			'idams' : req.session.idams,
			// 'disclaimerAccepted' : req.session.disclaimerAccepted,
			// 'disclaimerVersion' : disclaimerVersion
		});
	});

	// Advanced learner loans for 2018 to 2019 (v1)
	router.get('/' + version + '/allocation-statements/adults/advanced-learner-loan-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/advanced-learner-loan-details-v1', {
			'version' : version,
			'idams' : req.session.idams,
			// 'disclaimerAccepted' : req.session.disclaimerAccepted,
			// 'disclaimerVersion' : disclaimerVersion
		});
	});

}
