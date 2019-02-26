module.exports = function(router) {

	var version = 'beta/v17-0-0';

	/**********
	 * ERROR PAGES
	 * **********/
	
	// Show to the users when they are not able to view any of the service features
	router.get('/' + version + '/error-pages/no-features-available', function (req, res) {
		res.render(version + '/error-pages/no-features-available', {
			'version' : version,
			'alternativeContentRequired' : req.query.alternativeContentRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3
		});
	});

}
