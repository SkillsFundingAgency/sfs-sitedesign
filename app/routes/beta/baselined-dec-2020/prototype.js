module.exports = function(router) {

	// Add latest versions of MYESF features here
	var version = 'beta/baselined-dec-2020';
	var latestVersionVLF = 'beta/baselined-dec-2020';
	var latestVersionNFF = 'beta/baselined-dec-2020';
	var latestVersionAdults = 'beta/v112-0-0';
	var latestVersionGAG = 'beta/v112-0-0';
	var latestVersionDocumentExchange = 'beta/v109-0-0';

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
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'versioning' : "True",
			'showPropositionLinks' : "True",
			'serviceScope' : "User journeys"
		});
	});

	/**********
	* PROTOTYPE
	* ARCHIVE PAGE (kanban-beta-v118-0-0)
	* **********/

	// Render session variables needed for the archive page
	router.get('/archive/beta/kanban-beta-v118-0-0', function (req, res) {
		res.render('archive/beta/kanban-beta-v118-0-0', {
			'version' : version,
			'latestVersion' : version,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'versioning' : "True",
			'showPropositionLinks' : "True"
		});
	});

	/**********
	* PROTOTYPE
	* HTTP STATUS CODE PAGES (GLOBAL)
	* **********/

	// 401 (Unauthorized)
	router.get('/' + version + '/error-pages/401/access-not-allowed', function (req, res) {
		res.render(version + '/error-pages/401/access-not-allowed', {
			'version' : version,
			'versioning' : "True",
			'idams' : "dashboard",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

	// 403 (Forbidden)
	router.get('/' + version + '/error-pages/403/access-forbidden', function (req, res) {
		res.render(version + '/error-pages/403/access-forbidden', {
			'version' : version,
			'versioning' : "True",
			'idams' : "dashboard",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

	// 404 (Not Found)
	router.get('/' + version + '/error-pages/404/page-not-found', function (req, res) {
		res.render(version + '/error-pages/404/page-not-found', {
			'version' : version,
			'versioning' : "True",
			'idams' : "dashboard",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

	// 500 (Internal Server Error)
	router.get('/' + version + '/error-pages/500/problem-with-the-service', function (req, res) {
		res.render(version + '/error-pages/500/problem-with-the-service', {
			'version' : version,
			'versioning' : "True",
			'idams' : "dashboard",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

	// 503 (Service Unavailable)
	router.get('/' + version + '/error-pages/503/service-is-unavailable', function (req, res) {
		res.render(version + '/error-pages/503/service-is-unavailable', {
			'version' : version,
			'versioning' : "True",
			'idams' : "dashboard",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

	/**********
	* PROTOTYPE
	* CUSTOM MYESF ERROR PAGES (GLOBAL)
	* **********/

	// Show to users when they are not permitted to access the apprenticeship service due to:
	// REASON 1: User has not signed their apprenticeship agreement in MYESF
	// REASON 2: User as not signed their apprenticeship agreement in MYESF AND does not have the required role in MYESF to sign it
	router.get('/' + version + '/error-pages/no-apprenticeship-service', function (req, res) {
		res.render(version + '/error-pages/no-apprenticeship-service', {
			'version' : version,
			'versioning' : "True",
			'idams' : "adults",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

	// Show to users when they are not able to view any of the service features (tiles)
	router.get('/' + version + '/error-pages/no-features-available', function (req, res) {
		res.render(version + '/error-pages/no-features-available', {
			'version' : version,
			'versioning' : "True",
			'idams' : "dashboard",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

	// TEMPORARY (while other ESFA services wait to use DfE Sign-in)
	// Show this page to users to warn them they will need to sign in with IdAMS to access this service
	router.get('/' + version + '/error-pages/sign-into-another-service', function (req, res) {
		res.render(version + '/error-pages/sign-into-another-service', {
			'version' : version,
			'versioning' : "True",
			'idams' : "adults",
			'myRolesAndPermissionsURL' : "#",
			'signOutURL' : "#"
		});
	});

}
