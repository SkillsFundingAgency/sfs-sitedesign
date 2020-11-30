module.exports = function(router) {

	// Add latest versions of MYESF features here
	var latestVersion = 'beta/v118-0-0';
	var latestVersionVLF = 'beta/v118-0-0';
	var latestVersionNFF = 'beta/v118-0-0';
	var latestVersionAdults = 'beta/v112-0-0';
	var latestVersionGAG = 'beta/v112-0-0';
	var latestVersionDocumentExchange = 'beta/v109-0-0';
	
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
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Accordion
	router.get('/component-library/accordion', function (req, res) {		
		res.render('component-library/accordion', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/accordion', function (req, res) {		
		res.render('component-library/examples/accordion', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/accordion-with-additional-information', function (req, res) {		
		res.render('component-library/examples/accordion-with-additional-information', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Back to top link
	router.get('/component-library/back-to-top-link', function (req, res) {		
		res.render('component-library/back-to-top-link', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3
		});
	});
	router.get('/component-library/examples/back-to-top-link-stand-alone', function (req, res) {		
		res.render('component-library/examples/back-to-top-link-stand-alone', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/back-to-top-link-with-pagination', function (req, res) {		
		res.render('component-library/examples/back-to-top-link-with-pagination', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3
		});
	});

	// Card
	router.get('/component-library/card', function (req, res) {		
		res.render('component-library/card', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-as-navigation', function (req, res) {		
		res.render('component-library/examples/card-as-navigation', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-as-navigation-with-notification', function (req, res) {		
		res.render('component-library/examples/card-as-navigation-with-notification', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-to-display-data-one-third', function (req, res) {		
		res.render('component-library/examples/card-to-display-data-one-third', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/card-to-display-data-two-thirds', function (req, res) {		
		res.render('component-library/examples/card-to-display-data-two-thirds', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Download a document
	router.get('/component-library/download-a-document', function (req, res) {		
		res.render('component-library/download-a-document', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/download-a-document', function (req, res) {		
		res.render('component-library/examples/download-a-document', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Filter a list
	router.get('/component-library/filter-a-list', function (req, res) {		
		res.render('component-library/filter-a-list', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/filter-a-list-standard', function (req, res) {		
		res.render('component-library/examples/filter-a-list-standard', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/filter-a-list-searchable', function (req, res) {		
		res.render('component-library/examples/filter-a-list-searchable', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3
		});
	});

	// Funding header
	router.get('/component-library/funding-header', function (req, res) {		
		res.render('component-library/funding-header', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-header-full-width', function (req, res) {		
		res.render('component-library/examples/funding-header-full-width', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-header-float-left', function (req, res) {		
		res.render('component-library/examples/funding-header-float-left', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-header-variance', function (req, res) {		
		res.render('component-library/examples/funding-header-variance', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Funding table
	router.get('/component-library/funding-table', function (req, res) {		
		res.render('component-library/funding-table', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-two-columns', function (req, res) {		
		res.render('component-library/examples/funding-table-two-columns', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-with-variance', function (req, res) {		
		res.render('component-library/examples/funding-table-with-variance', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-three-or-more-columns', function (req, res) {		
		res.render('component-library/examples/funding-table-three-or-more-columns', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-table-with-link', function (req, res) {		
		res.render('component-library/examples/funding-table-with-link', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Funding totals
	router.get('/component-library/funding-totals', function (req, res) {		
		res.render('component-library/funding-totals', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-totals-grand-total', function (req, res) {		
		res.render('component-library/examples/funding-totals-grand-total', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-totals-sub-total', function (req, res) {		
		res.render('component-library/examples/funding-totals-sub-total', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/funding-totals-variance', function (req, res) {		
		res.render('component-library/examples/funding-totals-variance', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Icons
	router.get('/component-library/icons', function (req, res) {		
		res.render('component-library/icons', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-divide', function (req, res) {		
		res.render('component-library/examples/icons-divide', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-equals', function (req, res) {		
		res.render('component-library/examples/icons-equals', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-minus', function (req, res) {		
		res.render('component-library/examples/icons-minus', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-multiply', function (req, res) {		
		res.render('component-library/examples/icons-multiply', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-plus', function (req, res) {		
		res.render('component-library/examples/icons-plus', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-document', function (req, res) {		
		res.render('component-library/examples/icons-document', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-increase', function (req, res) {		
		res.render('component-library/examples/icons-increase', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-decrease', function (req, res) {		
		res.render('component-library/examples/icons-decrease', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/icons-print', function (req, res) {		
		res.render('component-library/examples/icons-print', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Links
	router.get('/component-library/links', function (req, res) {		
		res.render('component-library/links', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/links-standard', function (req, res) {		
		res.render('component-library/examples/links-standard', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/links-external', function (req, res) {		
		res.render('component-library/examples/links-external', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/links-tabbed', function (req, res) {		
		res.render('component-library/examples/links-tabbed', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/links-action', function (req, res) {		
		res.render('component-library/examples/links-action', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/links-funding-table-guidance', function (req, res) {		
		res.render('component-library/examples/links-funding-table-guidance', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Organisation banner
	router.get('/component-library/organisation-banner', function (req, res) {		
		res.render('component-library/organisation-banner', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/organisation-banner', function (req, res) {		
		res.render('component-library/examples/organisation-banner', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Pagination
	router.get('/component-library/pagination', function (req, res) {		
		res.render('component-library/pagination', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3,
			'page4' : req.query.page4,
			'page5' : req.query.page5,
			'page6' : req.query.page6
		});
	});
	router.get('/component-library/examples/pagination-10', function (req, res) {		
		res.render('component-library/examples/pagination-10', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3,
			'page4' : req.query.page4,
			'page5' : req.query.page5,
			'page6' : req.query.page6
		});
	});
	router.get('/component-library/examples/pagination-25', function (req, res) {		
		res.render('component-library/examples/pagination-25', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3
		});
	});

	// Search
	router.get('/component-library/search', function (req, res) {		
		res.render('component-library/search', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3,
			'error' : req.query.error,
			'error1' : req.query.error1,
			'error2' : req.query.error2
		});
	});
	router.get('/component-library/examples/search-for-an-entity', function (req, res) {		
		res.render('component-library/examples/search-for-an-entity', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'error' : req.query.error
		});
	});
	router.post('/component-library/examples/search-for-an-entity', function (req, res) {		

		// Make sure the user chooses an option
		if (req.body.schoolOrAcademySearch == "") {
			res.redirect('/component-library/examples/search-for-an-entity?error=true');
		}
		// Success
		else {
			res.redirect('/component-library/examples/search-for-an-entity');
		}
		
	});
	router.get('/component-library/examples/search-a-large-list-of-choices', function (req, res) {		
		res.render('component-library/examples/search-a-large-list-of-choices', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3,
			'error' : req.query.error,
			'error1' : req.query.error1,
			'error2' : req.query.error2
		});
	});
	router.post('/component-library/examples/search-a-large-list-of-choices', function (req, res) {		

		// Make sure the user chooses an option
		if (req.body.organisationName == undefined) {
			res.redirect('/component-library/examples/search-a-large-list-of-choices?paginationRequired=true&page1=true&error=true&error2=true');
		}
		// Success
		else {
			res.redirect('/component-library/examples/search-a-large-list-of-choices');
		}
		
	});
	// NON JAVASCRIPT - Deal with the non JavaScript scenario (e.g. POST) for users entering an empty search on the radio buttons
	router.get('/component-library/examples/search-a-large-list-of-choices-non-javascript-post', function (req, res) {		
		
		req.session.searchInput = req.query.searchAcademyOrSchool;
		var searchInput = req.session.searchInput;

		// Make sure the user chooses an option
		if (searchInput == "") {
			res.redirect('/component-library/examples/search-a-large-list-of-choices?paginationRequired=true&page1=true&error=true&error1=true');
		}
		// Success
		else {
			res.redirect('/component-library/examples/search-a-large-list-of-choices?paginationRequired=true&page1=true');
		}
		
	});

	// Signed-in account banner
	router.get('/component-library/signed-in-account-banner', function (req, res) {		
		res.render('component-library/signed-in-account-banner', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/signed-in-account-banner', function (req, res) {		
		res.render('component-library/examples/signed-in-account-banner', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Tabs
	router.get('/component-library/tabs', function (req, res) {		
		res.render('component-library/tabs', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tabs', function (req, res) {		
		res.render('component-library/examples/tabs', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

	// Tag
	router.get('/component-library/tag', function (req, res) {		
		res.render('component-library/tag', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tag-blue', function (req, res) {		
		res.render('component-library/examples/tag-blue', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tag-red', function (req, res) {		
		res.render('component-library/examples/tag-red', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});
	router.get('/component-library/examples/tag-grey', function (req, res) {		
		res.render('component-library/examples/tag-grey', {
			'latestVersion' : latestVersion,
			'latestVersionVLF' : latestVersionVLF,
			'latestVersionNFF' : latestVersionNFF,
			'latestVersionAdults' : latestVersionAdults,
			'latestVersionGAG' : latestVersionGAG,
			'latestVersionDocumentExchange' : latestVersionDocumentExchange,
			'showPropositionLinks' : "True",
			'serviceScope' : req.session.serviceScope
		});
	});

}
