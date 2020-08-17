module.exports = function(router) {

	var version = 'beta/v110-0-0';
	

	/**********
	* GLOBAL
	* **********/

	// Set all global data and session variables
	router.get('/' + version + '/not-signed-in/*', function (req, res, next) {				

		// Ensure that the default public service name (e.g. "Manage your education and skills funding") is NOT set
		// Instead set the sub service name: "View national funding formula tables"
		req.session.publicServiceName = "NFF";

		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";

		return next();
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/search-funding', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/search-funding', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.post('/' + version + '/not-signed-in/national-funding-formula/search-funding', function (req, res) {		
		if (req.body.searchScope == "School"){
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/find-organisation');
		}
		if (req.body.searchScope == "MAT"){
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-mat/allocation-statements');
		}
		if (req.body.searchScope == "LA"){
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-statements');
		}
	});
	/**********
	* NOT SIGNED-IN (PUBLIC)
	* VIEW NATIONAL FUNDING FORMULA TABLES
	* **********/

	// Start page (MYESF)
	// LEGACY but left in to show what it should look like

	// Start page (NFF)
	// DEFAULT
	router.get('/' + version + '/not-signed-in/national-funding-formula/start', function (req, res) {
		res.render(version + '/not-signed-in/national-funding-formula/start', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula', function (req, res) {
		res.render(version + '/not-signed-in/national-funding-formula/start', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'term1' : 'True'
		});
	});


	// Find a school or academy
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/find-organisation', function (req, res) {
		res.render(version + '/not-signed-in/national-funding-formula/find-school/find-organisation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/not-signed-in/national-funding-formula/find-school/find-organisation', function (req, res) {		
		
		var choice = req.body.choice;
		req.session.choice = choice;
		var schoolOrAcademy = req.body.schoolOrAcademySearch.toLowerCase();
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		// Added so we can see an error page (search term which returns zero results)
		if (schoolOrAcademy == "green oak primary") {				
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/no-results');
		}
		// Skips the did you mean page and finds a direct match for "St Mary's Kilburn Church of England Primary School"
		else if (schoolOrAcademy == "2023517" || schoolOrAcademy == "st mary's kilburn church of england primary school" || schoolOrAcademy == "st mary's kilburn church of england primary school (camden) - 100042/2023517") {
			
			req.session.searchScope = "St marys";
			req.session.searchTerm = schoolOrAcademy;
			req.session.didYouMean = "No";
			
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown');
		}
		
		// Show the error validation if a user enters a blank search term (e.g. "")
		else if (schoolOrAcademy == "") {
			
			req.session.radio = "Radio 1";
			
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/find-organisation?error=true&error1=true');
		}
		// Skips the did you mean page and finds a direct match "Hackwood primary"
		else if (schoolOrAcademy == "hackwood") {
			
			req.session.searchScope = "Hackwood";
			req.session.searchTerm = schoolOrAcademy;
			req.session.didYouMean = "No";
			
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood');
		}
		// Skips the did you mean page and finds a direct match "Hackwood primary"
		else if (schoolOrAcademy == "hackwood wild card") {
			
			req.session.searchScope = "Hackwood wild card";
			req.session.searchTerm = schoolOrAcademy;
			req.session.didYouMean = "No";
			
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood-wild-card');
		}
		// Skips the did you mean page and finds a direct match "Hackwood primary"
		else if (schoolOrAcademy == "st marys wild card") {
			
			req.session.searchScope = "St marys wild card";
			req.session.searchTerm = schoolOrAcademy;
			req.session.didYouMean = "No";
			
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown-wild-card');
		}
		// Show the did you mean page for anything else
		else if (schoolOrAcademy.indexOf('-') > -1) {
			
			req.session.searchScope = "St marys";
			req.session.searchTerm = schoolOrAcademy;
			req.session.didYouMean = "No";
			
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown?input=' + schoolOrAcademy);
		}
		else {

			req.session.searchScope = "Primary";
			req.session.searchTerm = schoolOrAcademy;
			req.session.didYouMean = "Yes";

			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/did-you-mean?input=' + schoolOrAcademy);
		}
			
	});
	

	// Did you mean (e.g. when there are multiple search results)
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/did-you-mean', function (req, res) {			
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";

		// Check for a URL query parameter override (e.g. when linking directly to this page)
		var urlParameterOverride = req.query.searchTerm;

		if (urlParameterOverride == "abbey") {
			req.session.searchScope = "Primary";
			req.session.searchTerm = "abbey";
		}
		else if (urlParameterOverride == "default") {
			req.session.searchScope = "Primary";
			req.session.searchTerm = "default";
		}
		
		res.render(version + '/not-signed-in/national-funding-formula/find-school/did-you-mean', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3,
			'noFilterResults' : req.query.noFilterResults
		});
	});

	// Scenario A: School with both previous and current NFF funding values
	// DEFAULT
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown', function (req, res) {			
		
		searchScope = req.session.searchScope;
		var dynamicTerm1;
		var dynamicTerm2;
		var dynamicTerm3;
		var dynamicTerm4;

		if (searchScope == "Primary") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		else if (searchScope == "LA") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "True";
			dynamicTerm3 = "True";
			dynamicTerm4 = "True";
		}
		else {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		
		res.render(version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'term1' : dynamicTerm1,
			'term2' : dynamicTerm2,
			'term3' : dynamicTerm3,
			'term4' : dynamicTerm4
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_nofunding', function (req, res) {			
		
		searchScope = req.session.searchScope;
		var dynamicTerm1;
		var dynamicTerm2;
		var dynamicTerm3;
		var dynamicTerm4;

		if (searchScope == "Primary") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		else if (searchScope == "LA") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "True";
			dynamicTerm3 = "True";
			dynamicTerm4 = "True";
		}
		else {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		
		res.render(version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_nofunding', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'term1' : dynamicTerm1,
			'term2' : dynamicTerm2,
			'term3' : dynamicTerm3,
			'term4' : dynamicTerm4
		});
	});
	

	// Scenario B: School with only current NFF funding values (no previous)
	// DEFAULT
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood', function (req, res) {			
		
		searchScope = req.session.searchScope;
		var dynamicTerm1;
		var dynamicTerm2;
		var dynamicTerm3;
		var dynamicTerm4;

		if (searchScope == "Primary") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		else if (searchScope == "LA") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "True";
			dynamicTerm3 = "True";
			dynamicTerm4 = "True";
		}
		else {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		
		res.render(version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'term1' : dynamicTerm1,
			'term2' : dynamicTerm2,
			'term3' : dynamicTerm3,
			'term4' : dynamicTerm4
		});
	});

	// Scenario A: School with both previous and current NFF funding values
	// LEGACY
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown-option-a', function (req, res) {			
		
		searchScope = req.session.searchScope;
		var dynamicTerm1;
		var dynamicTerm2;
		var dynamicTerm3;
		var dynamicTerm4;

		if (searchScope == "Primary") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		else if (searchScope == "LA") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "True";
			dynamicTerm3 = "True";
			dynamicTerm4 = "True";
		}
		else {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}

			res.render(version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown-option-a', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'term1' : dynamicTerm1,
			'term2' : dynamicTerm2,
			'term3' : dynamicTerm3,
			'term4' : dynamicTerm4
		});
	});
		
	// Scenario B: School with only current NFF funding values (no previous)
	// LEGACY
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood-option-a', function (req, res) {			
		
		searchScope = req.session.searchScope;
		var dynamicTerm1;
		var dynamicTerm2;
		var dynamicTerm3;
		var dynamicTerm4;

		if (searchScope == "Primary") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		else if (searchScope == "LA") {
			dynamicTerm1 = "True";
			dynamicTerm2 = "True";
			dynamicTerm3 = "True";
			dynamicTerm4 = "True";
		}
		else {
			dynamicTerm1 = "True";
			dynamicTerm2 = "False";
			dynamicTerm3 = "False";
			dynamicTerm4 = "False";
		}
		
		res.render(version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood-option-a', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'term1' : dynamicTerm1,
			'term2' : dynamicTerm2,
			'term3' : dynamicTerm3,
			'term4' : dynamicTerm4
		});
	});

	/**********
	* NOT SIGNED-IN (PUBLIC)
	* VIEW NATIONAL FUNDING FORMULA TABLES
	* OTHER PAGES
	* **********/
	
	// Display when users enter a search term which returns zero results
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/no-results', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-school/no-results', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-mat/no-results', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-mat/no-results', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/no-results', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-local-authority/no-results', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-mat/dashboard', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		req.session.idams = "MAT";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-mat/dashboard', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-mat/allocation-history', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-mat/allocation-history', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});

	router.get('/' + version + '/not-signed-in/national-funding-formula/find-mat/allocation-statements', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-mat/allocation-statements', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-mat/select-academy', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-mat/select-academy', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-mat/funding-breakdown/12-09-2021', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-mat/funding-breakdown/12-09-2021', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	

	router.get('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-history', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-history', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});

	router.get('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-statements', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-statements', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-statements_v2', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-statements_v2', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.get('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/find_la', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/national-funding-formula/find-local-authority/find_la', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'term1' : 'True'
		});
	});
	router.post('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/find_la', function (req, res) {		
			res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-local-authority/allocation-statements_v2');
	});

// CHILD VIEW //


router.get('/' + version + '/not-signed-in/national-funding-formula/start_child', function (req, res) {
	res.render(version + '/not-signed-in/national-funding-formula/start_child', {
		'version' : version,
		'publicServiceName' : req.session.publicServiceName,
		'versioning' : req.session.versioning,
		'term1' : 'True'
	});
});
router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_partway', function (req, res) {			
	res.render(version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_partway', {
		'version' : version,
		'publicServiceName' : req.session.publicServiceName,
		'versioning' : req.session.versioning,
		'choice' : req.session.choice,
		'searchScope' : req.session.searchScope,
		'didYouMean' : req.session.didYouMean,
		'toggleVersion' : req.query.toggleVersion
	});
});

router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_child', function (req, res) {			
		
	searchScope = req.session.searchScope;
	var dynamicTerm1;
	var dynamicTerm2;
	var dynamicTerm3;
	var dynamicTerm4;

	if (searchScope == "Primary") {
		dynamicTerm1 = "True";
		dynamicTerm2 = "False";
		dynamicTerm3 = "False";
		dynamicTerm4 = "False";
	}
	else if (searchScope == "LA") {
		dynamicTerm1 = "True";
		dynamicTerm2 = "True";
		dynamicTerm3 = "True";
		dynamicTerm4 = "True";
	}
	else {
		dynamicTerm1 = "True";
		dynamicTerm2 = "False";
		dynamicTerm3 = "False";
		dynamicTerm4 = "False";
	}

	res.render(version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_child', {
		'version' : version,
		'publicServiceName' : req.session.publicServiceName,
		'versioning' : req.session.versioning,
		'choice' : req.session.choice,
		'searchScope' : req.session.searchScope,
		'didYouMean' : req.session.didYouMean,
		'toggleVersion' : req.query.toggleVersion,
		'term1' : dynamicTerm1,
		'term2' : dynamicTerm2,
		'term3' : dynamicTerm3,
		'term4' : dynamicTerm4
	});
});

router.get('/' + version + '/not-signed-in/national-funding-formula/accessibility', function (req, res) {
	res.render(version + '/not-signed-in/national-funding-formula/accessibility', {
		'version' : version,
		'publicServiceName' : req.session.publicServiceName,
		'versioning' : req.session.versioning,
		'error' : req.query.error
	});
});
router.get('/' + version + '/not-signed-in/national-funding-formula/find-school/find-organisation_child', function (req, res) {
	res.render(version + '/not-signed-in/national-funding-formula/find-school/find-organisation_child', {
		'version' : version,
		'publicServiceName' : req.session.publicServiceName,
		'versioning' : req.session.versioning,
		'error' : req.query.error
	});
});

router.post('/' + version + '/not-signed-in/national-funding-formula/find-school/find-organisation_child', function (req, res) {		
		
	var choice = req.body.choice;
	req.session.choice = choice;
	var schoolOrAcademy = req.body.schoolOrAcademySearch.toLowerCase();
	// Reset an error validation variable before user returns to this page
	req.session.radio = "";
	// Added so we can see an error page (search term which returns zero results)
	if (schoolOrAcademy == "green oak primary") {				
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/no-results');
	}
	// Skips the did you mean page and finds a direct match for "St Mary's Kilburn Church of England Primary School"
	else if (schoolOrAcademy == "2023517" || schoolOrAcademy == "st mary's kilburn church of england primary school" || schoolOrAcademy == "st mary's kilburn church of england primary school (camden) - 100042/2023517") {
		
		req.session.searchScope = "St marys";
		req.session.searchTerm = schoolOrAcademy;
		req.session.didYouMean = "No";
		
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown');
	}

	else if (schoolOrAcademy == "102745" || schoolOrAcademy == "william davies primary school - newham") {
		
		req.session.searchScope = "william davies";
		req.session.searchTerm = schoolOrAcademy;
		req.session.didYouMean = "No";
		
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_partway');
	}
	
	// Show the error validation if a user enters a blank search term (e.g. "")
	else if (schoolOrAcademy == "") {
		
		req.session.radio = "Radio 1";
		
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/find-organisation?error=true&error1=true');
	}
	// Skips the did you mean page and finds a direct match "Hackwood primary"
	else if (schoolOrAcademy == "hackwood") {
		
		req.session.searchScope = "Hackwood";
		req.session.searchTerm = schoolOrAcademy;
		req.session.didYouMean = "No";
		
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood');
	}
	// Skips the did you mean page and finds a direct match "Hackwood primary"
	else if (schoolOrAcademy == "hackwood wild card") {
		
		req.session.searchScope = "Hackwood wild card";
		req.session.searchTerm = schoolOrAcademy;
		req.session.didYouMean = "No";
		
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/statement-hackwood-wild-card');
	}
	// Skips the did you mean page and finds a direct match "Hackwood primary"
	else if (schoolOrAcademy == "st marys wild card") {
		
		req.session.searchScope = "St marys wild card";
		req.session.searchTerm = schoolOrAcademy;
		req.session.didYouMean = "No";
		
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown-wild-card');
	}
	// Show the did you mean page for anything else
	else if (schoolOrAcademy.indexOf('-') > -1) {
		
		req.session.searchScope = "St marys";
		req.session.searchTerm = schoolOrAcademy;
		req.session.didYouMean = "No";
		
		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/funding-breakdown_child?input=' + schoolOrAcademy);
	}
	else {

		req.session.searchScope = "Primary";
		req.session.searchTerm = schoolOrAcademy;
		req.session.didYouMean = "Yes";

		res.redirect('/' + version + '/not-signed-in/national-funding-formula/find-school/did-you-mean?input=' + schoolOrAcademy);
	}
		
});


}
