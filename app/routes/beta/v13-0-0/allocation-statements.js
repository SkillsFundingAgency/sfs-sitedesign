module.exports = function(router) {

	var version = 'beta/v13-0-0';

	/**********
	 * ADULTS
	 * **********/

	// GOV.UK Start
	router.get('/' + version + '/allocation-statements/adults/start', function (req, res) {
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
		
		res.render(version + '/allocation-statements/adults/disclaimer', {
			'idams' : req.session.idams
		});
	});
	router.post('/' + version + '/allocation-statements/adults/disclaimer', function (req, res) {		
		res.redirect('/' + version + '/allocation-statements/adults/allocation-statement-list');
	});

}
