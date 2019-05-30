module.exports = function(router) {

	var version = 'beta/v98-0-0';

	/**********
	 * ERROR PAGES (GLOBAL)
	 * **********/
	
	// TEMPORARY - Show to users when they are not able to go directly to the apprenticeship service
	router.get('/' + version + '/error-pages/no-apprenticeship-service', function (req, res) {
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'alternativeContentRequired' : req.query.alternativeContentRequired,
			'reason1' : req.query.reason1,
			'reason2' : req.query.reason2,
			'reason3' : req.query.reason3
		});
	});

	// Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/error-pages/no-features-available', function (req, res) {
		res.render(version + '/error-pages/no-features-available', {
			'version' : version,
			'alternativeContentRequired' : req.query.alternativeContentRequired,
			'reason1' : req.query.reason1,
			'reason2' : req.query.reason2,
			'reason3' : req.query.reason3
		});
	});

}
