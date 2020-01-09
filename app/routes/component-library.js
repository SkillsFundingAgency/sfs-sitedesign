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

}
