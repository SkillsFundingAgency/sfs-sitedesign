module.exports = function(router) {

	var version = 'beta/v13-0-0';

	/**********
	 * ADULTS
	 * **********/

	// GOV.UK Entry Point
	router.get('/' + version + '/allocation-statements/adults/start', function (req, res) {
		
		req.session.disclaimerAccepted = "No";
		
		res.render(version + '/start');
	});
	router.post('/' + version + '/allocation-statements/adults/start', function (req, res) {		
		res.redirect('/' + version + '/allocation-statements/adults/idams');
	});

	// IDAMS
	router.get('/' + version + '/allocation-statements/adults/idams', function (req, res) {
		res.render(version + '/idams');
	});
	router.post('/' + version + '/allocation-statements/adults/idams', function (req, res) {		
		res.redirect('/' + version + '/allocation-statements/adults/dashboard');
	});

	// Dashboard
	router.get('/' + version + '/allocation-statements/adults/dashboard', function (req, res) {
	
		req.session.idams = "dashboard";
		
		res.render(version + '/allocation-statements/dashboard', {
			'idams' : req.session.idams
		});
	});

	// Disclaimer
	router.get('/' + version + '/allocation-statements/adults/disclaimer', function (req, res) {
	
		req.session.idams = "adults";

		if (req.session.disclaimerAccepted == "Yes") {
			res.render(version + '/allocation-statements/adults/allocation-statement-list', {
				'idams' : req.session.idams
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

	// Allocation statements
	router.get('/' + version + '/allocation-statements/adults/allocation-statement-list', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/allocation-statement-list', {
			'idams' : req.session.idams
		});
	});

	// Carry-in apprenticeship for 2018 to 2019
	router.get('/' + version + '/allocation-statements/adults/carry-in-apprenticeship-details', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/carry-in-apprenticeship-details', {
			'idams' : req.session.idams
		});
	});

	// Adult Education Budget 2018 to 2019 (v2)
	router.get('/' + version + '/allocation-statements/adults/adult-education-budget-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/adult-education-budget-details-v2', {
			'idams' : req.session.idams
		});
	});

	// Adult Education Budget 2018 to 2019 (v1)
	router.get('/' + version + '/allocation-statements/adults/adult-education-budget-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/adult-education-budget-details-v1', {
			'idams' : req.session.idams
		});
	});

	// Advanced learner loans for 2018 to 2019 (v2)
	router.get('/' + version + '/allocation-statements/adults/advanced-learner-loan-details-v2', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/advanced-learner-loan-details-v2', {
			'idams' : req.session.idams
		});
	});

	// Advanced learner loans for 2018 to 2019 (v1)
	router.get('/' + version + '/allocation-statements/adults/advanced-learner-loan-details-v1', function (req, res) {

		req.session.idams = "adults";
		
		res.render(version + '/allocation-statements/adults/advanced-learner-loan-details-v1', {
			'idams' : req.session.idams
		});
	});

}
