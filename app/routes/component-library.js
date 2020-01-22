module.exports = function(router) {

	var latestVersion = 'beta/v108-0-0';
	
	/**********
	* GLOBAL
	* **********/

	// Set all global data and session variables
	router.get('/component-library/*', function (req, res, next) {				

		// Set the scope of all child pages as: "Component library"
		req.session.serviceScope = "Component library";

		return next();
	});

	/**********
	* COMPONENT LIBRARY
	* **********/

	// Landing page (index.html)
	router.get('/component-library/', function (req, res) {		
		res.render('component-library/index', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Accordion
	router.get('/component-library/accordion', function (req, res) {		
		res.render('component-library/accordion', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/accordion', function (req, res) {		
		res.render('component-library/examples/accordion', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Back to top link
	router.get('/component-library/back-to-top-link', function (req, res) {		
		res.render('component-library/back-to-top-link', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/back-to-top-link', function (req, res) {		
		res.render('component-library/examples/back-to-top-link', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Card
	router.get('/component-library/card', function (req, res) {		
		res.render('component-library/card', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-as-navigation', function (req, res) {		
		res.render('component-library/examples/card-as-navigation', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-as-navigation-with-notification', function (req, res) {		
		res.render('component-library/examples/card-as-navigation-with-notification', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-to-display-data-one-third', function (req, res) {		
		res.render('component-library/examples/card-to-display-data-one-third', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-to-display-data-two-thirds', function (req, res) {		
		res.render('component-library/examples/card-to-display-data-two-thirds', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Download a document
	router.get('/component-library/download-a-document', function (req, res) {		
		res.render('component-library/download-a-document', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/download-a-document', function (req, res) {		
		res.render('component-library/examples/download-a-document', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Filter a list
	router.get('/component-library/filter-a-list', function (req, res) {		
		res.render('component-library/filter-a-list', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/filter-a-list', function (req, res) {		
		res.render('component-library/examples/filter-a-list', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Funding table
	router.get('/component-library/funding-table', function (req, res) {		
		res.render('component-library/funding-table', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-two-columns', function (req, res) {		
		res.render('component-library/examples/funding-table-two-columns', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-no-repeating-column-headers', function (req, res) {		
		res.render('component-library/examples/funding-table-no-repeating-column-headers', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-four-columns', function (req, res) {		
		res.render('component-library/examples/funding-table-four-columns', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-with-link', function (req, res) {		
		res.render('component-library/examples/funding-table-with-link', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Funding total section
	router.get('/component-library/funding-total-section', function (req, res) {		
		res.render('component-library/funding-total-section', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-total-section', function (req, res) {		
		res.render('component-library/examples/funding-total-section', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Icons
	router.get('/component-library/icons', function (req, res) {		
		res.render('component-library/icons', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons', function (req, res) {		
		res.render('component-library/examples/icons', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Organisation banner
	router.get('/component-library/organisation-banner', function (req, res) {		
		res.render('component-library/organisation-banner', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/organisation-banner', function (req, res) {		
		res.render('component-library/examples/organisation-banner', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Pagination
	router.get('/component-library/pagination', function (req, res) {		
		res.render('component-library/pagination', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/pagination', function (req, res) {		
		res.render('component-library/examples/pagination', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Search
	router.get('/component-library/search', function (req, res) {		
		res.render('component-library/search', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/search', function (req, res) {		
		res.render('component-library/examples/search', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Signed-in account banner
	router.get('/component-library/signed-in-account-banner', function (req, res) {		
		res.render('component-library/signed-in-account-banner', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/signed-in-account-banner', function (req, res) {		
		res.render('component-library/examples/signed-in-account-banner', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Tabs
	router.get('/component-library/tabs', function (req, res) {		
		res.render('component-library/tabs', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tabs', function (req, res) {		
		res.render('component-library/examples/tabs', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Tag
	router.get('/component-library/tag', function (req, res) {		
		res.render('component-library/tag', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tag-blue', function (req, res) {		
		res.render('component-library/examples/tag-blue', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tag-red', function (req, res) {		
		res.render('component-library/examples/tag-red', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tag-grey', function (req, res) {		
		res.render('component-library/examples/tag-grey', {
			'latestVersion' : latestVersion,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

}
