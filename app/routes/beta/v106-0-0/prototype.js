module.exports = function(router) {

	// Add latest versions of MYESF features here
	var version = 'beta/v106-0-0';
	var latestVersionVLF = 'beta/v105-1-0';
	
	/**********
	 * PROTOTYPE
	 * SCREEN FLOWS PAGE
	 * **********/

	// Render session variables needed for the screen flows (site map) page
	router.get('/' + version + '/site-map', function (req, res) {
		res.render(version + '/site-map', {
			'version' : version,
			'latestVersion' : version,
			'latestVersionVLF' : latestVersionVLF,
			'versioning' : "True",
			'showPropositionLinks' : "True",
			'serviceScope' : "User journeys"
		});
	});

	/**********
	 * PROTOTYPE
	 * ARCHIVE PAGE (kanban-beta-v106-0-0)
	 * **********/

	// Render session variables needed for the archive page
	router.get('/archive/beta/kanban-beta-v106-0-0', function (req, res) {
		res.render('archive/beta/kanban-beta-v106-0-0', {
			'version' : version,
			'latestVersion' : version,
			'latestVersionVLF' : latestVersionVLF,
			'versioning' : "True",
			'showPropositionLinks' : "True"
		});
	});

	/**********
	 * PROTOTYPE
	 * ERROR PAGES (GLOBAL)
	 * **********/
	
	// TEMPORARY - Show to users when they are not able to go directly to the apprenticeship service
	router.get('/' + version + '/error-pages/no-apprenticeship-service', function (req, res) {
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : "True",
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
			'versioning' : "True",
			'alternativeContentRequired' : req.query.alternativeContentRequired,
			'reason1' : req.query.reason1,
			'reason2' : req.query.reason2,
			'reason3' : req.query.reason3
		});
	});

}
