module.exports = function(router) {

	var version = 'beta/v106-0-0';

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

	/**********
	 * NOT SIGNED-IN (PUBLIC)
	 * VIEW NATIONAL FUNDING FORMULA TABLES
	 * **********/

	// Start page (MyESF)
	// LEGACY but left in to show what it should look like
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/start', function (req, res) {		
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'singleFundingStatement' : "true"
		});
	});
	router.post('/' + version + '/not-signed-in/view-national-funding-formula-tables/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/start');
	});

	// Start page (NFF)
	// DEFAULT
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/start', function (req, res) {
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/start', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});
	router.post('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/viewing-choice');
	});

	// Choose how to view provisional allocations
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/viewing-choice', function (req, res) {
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/viewing-choice', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/viewing-choice', function (req, res) {		
		
		var choice = req.body.choice;
		req.session.choice = choice;

		if (choice == "Individual") {
			
			// Reset an error validation variable before user returns to this page
			req.session.radio = "";
			
			res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/find-an-organisation');	
		}
		else if (choice == "National") {
			res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/national-level');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/viewing-choice?error=true');
		}
		
	});

	/**********
	 * NOT SIGNED-IN (PUBLIC)
	 * VIEW NATIONAL FUNDING FORMULA TABLES
	 * JOURNEY A: AN INDIVIDUAL SCHOOL 
	 * **********/

	// Find an organisation
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/find-an-organisation', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/find-an-organisation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'error' : req.query.error,
			'radio' : req.session.radio
		});
	});
	router.post('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/find-an-organisation', function (req, res) {
		
		var searchOn = req.body.searchScope;
		var schoolOrAcademy = req.body.schoolOrAcademySearch.toLowerCase();
		// var mat = req.body.matSearch.toLowerCase();
		var la = req.body.laSearch.toLowerCase();
		
		if (searchOn == "Child") {

			// Added so we can see an error page (search term which returns zero results)
			if (schoolOrAcademy == "no results") {				
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "St Mary's Kilburn Church of England Primary School")
			else if (schoolOrAcademy == "st mary's" || schoolOrAcademy == "st marys" || schoolOrAcademy == "2023517") {
				
				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/statement');
			}
			// Show the error validation if a user enters a blank search term (e.g. "")
			else if (schoolOrAcademy == "") {
				
				req.session.radio = "Radio 1";
				
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/find-an-organisation?error=true&error1=true');
			}
			// Turn pagination on (search term on "abbey" or "Abbey" with > 25 results)
			else if (schoolOrAcademy == "abbey" || schoolOrAcademy == "paging" || schoolOrAcademy == "show filter search") {
				
				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "Yes";
				
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/did-you-mean?paginationRequired=true&page1=true');
			}
			// Show the did you mean page for anything else
			else {

				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/did-you-mean');
			}
			
		}
		/*
		else if (searchOn == "MAT") {

			req.session.searchScope = "MAT";
			req.session.searchTerm = mat;

			// Added so we can see an error page (search term which returns zero results)
			if (mat == "no results" || mat == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "White Rose Academies Trust")
			else if (mat == "white rose academies trust") {
				
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/statement');
			}
			// Show the did you mean page for anything else
			else {

				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/did-you-mean');
			}			
			
		}
		*/
		else if (searchOn == "LA") {

			req.session.searchScope = "LA";
			req.session.searchTerm = la;

			// Added so we can see an error page (search term which returns zero results)
			if (la == "no results") {
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "Camden")
			else if (la == "camden" || la == "202") {

				req.session.didYouMean = "No";

				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/statement');
			}
			// Show the error validation if a user enters a blank search term (e.g. "")
			else if (la == "") {

				req.session.radio = "Radio 2";
			
				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/find-an-organisation?error=true&error2=true');
			}
			// Show the did you mean page for anything else
			else {

				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/did-you-mean');
			}			
			
		}
		
	});

	// Did you mean (e.g. when there are multiple search results)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/did-you-mean', function (req, res) {			
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/did-you-mean', {
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
			'page3' : req.query.page3
		});
	});

	// Single funding statement page
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/statement', function (req, res) {			
		
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
		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/statement', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'glossaryTerms' : 'True',
			'term1' : dynamicTerm1,
			'term2' : dynamicTerm2,
			'term3' : dynamicTerm3,
			'term4' : dynamicTerm4
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * DSG
	 * **********/

	// Allocation history  
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/allocation-history', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/allocation-history', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term2' : 'True',
			'term3' : 'True',
			'term4' : 'True'
		});
	});

	// REDIRECT hook page used to record the tab that the user wants to view on the DSG breakdown page (e.g. schools)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/tab-choice', function (req, res) {		
		
		req.session.tab = req.query.tab;
		// Reset this variable to 0 so we can execute the dynamic tab functionality
		req.session.reloads = 0;
		var redirectURL = req.query.redirectURL;
		
		res.redirect('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/' + redirectURL);
	});

	// Full funding allocation (DSG: all 4 blocks)
	// LATEST (17 December 2019)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/17-12-2019', function (req, res) {
		 
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/17-12-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True',
			'term4' : 'True',
			'reloads' : req.session.reloads,
			'tab' : req.session.tab,
			'scenario' : req.query.scenario
		});
	});

	// Full funding allocation (DSG: all 4 blocks)
	// PREVIOUS (27 March 2019)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/27-03-2019', function (req, res) {
		 
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/27-03-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True',
			'term4' : 'True',
			'reloads' : req.session.reloads,
			'tab' : req.session.tab,
			'scenario' : req.query.scenario
		});
	});

	// Full funding allocation (DSG: all 4 blocks) 
	// PREVIOUS (17 December 2018)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/17-12-2018', function (req, res) {		
		
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/funding-breakdown/17-12-2018', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True',
			'reloads' : req.session.reloads,
			'tab' : req.session.tab
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * PE AND SPORT
	 * **********/

	// Allocation history  
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/allocation-history', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/allocation-history', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term2' : 'True'
		});
	});

	// NOT APPROVED BY UX TEAM BODGED SOLUTION
	// 2018 to 2019
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/2018-to-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/2018-to-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// LATEST (5 October 2019)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/5-10-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/5-10-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// PREVIOUS (12 April 2019)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/12-04-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/12-04-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// PREVIOUS (5 February 2019)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/5-02-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/5-02-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// HISTORIC FOR PRIMARY (2018 to 2019)
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/primary-2018-to-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/pe-and-sport/funding-breakdown/primary-2018-to-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	/**********
	 * NOT SIGNED-IN (PUBLIC)
	 * VIEW NATIONAL FUNDING FORMULA TABLES
	 * JOURNEY B: ALL SCHOOLS (NATIONALLY) 
	 * **********/

	// All schools 2020 to 2021
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/download-funding/2020-to-2021', function (req, res) {
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/dedicated-schools-grant/download-funding/2020-to-2021', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True'
		});
	});

	/**********
	 * NOT SIGNED-IN (PUBLIC)
	 * VIEW NATIONAL FUNDING FORMULA TABLES
	 * OTHER PAGES
	 * **********/

	// Glossary of terms
	router.get('/' + version + '/not-signed-in/glossary-of-terms', function (req, res) {
		res.render(version + '/not-signed-in/glossary-of-terms', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'glossaryTerms' : 'False'
		});
	});
	
	// Display when users enter a search term which returns zero results
	router.get('/' + version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/no-results', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/view-national-funding-formula-tables/2020-to-2021/no-results', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

}
