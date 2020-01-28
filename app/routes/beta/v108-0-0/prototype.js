module.exports = function(router) {

	var version = 'beta/v108-0-0';
	
	/**********
	* PROTOTYPE
	* SCREEN FLOWS PAGE
	* **********/

	// Render session variables needed for the screen flows (site map) page
	router.get('/' + version + '/site-map', function (req, res) {
		res.render(version + '/site-map', {
			'version' : version,
			'latestVersion' : version,
			'versioning' : "True",
			'showPropositionLinks' : "True",
			'serviceScope' : "User journeys"
		});
	});

	/**********
	* PROTOTYPE
	* ARCHIVE PAGE (kanban-beta-v108-0-0)
	* **********/

	// Render session variables needed for the archive page
	router.get('/archive/beta/kanban-beta-v108-0-0', function (req, res) {
		res.render('archive/beta/kanban-beta-v108-0-0', {
			'version' : version,
			'latestVersion' : version,
			'versioning' : "True",
			'showPropositionLinks' : "True"
		});
	});

	/**********
	* PROTOTYPE
	* SHUTTER OR ERROR PAGES (GLOBAL)
	* **********/
	
	// Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MyESF
	// REASON 2: User as not signed their apprenticeship agreement in MyESF AND does not have the required role in MyESF to sign it
	router.get('/' + version + '/error-pages/no-apprenticeship-service', function (req, res) {
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : "True",
			'content1' : req.query.content1,
			'content2' : req.query.content2
		});
	});

	// Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/error-pages/no-features-available', function (req, res) {
		res.render(version + '/error-pages/no-features-available', {
			'version' : version,
			'versioning' : "True",
			'content1' : req.query.content1,
			'content2' : req.query.content2,
			'content3' : req.query.content3
		});
	});

	// TEMPORARY (while other ESFA services wait to use DfE Sign-in)
	// Show this page to users to warn them they will need to sign in with IdAMS to access this service
	router.get('/' + version + '/error-pages/sign-into-another-service', function (req, res) {
		res.render(version + '/error-pages/sign-into-another-service', {
			'version' : version,
			'versioning' : "True"
		});
	});

}
