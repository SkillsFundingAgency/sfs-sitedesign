module.exports = function(router) {

	var version = 'beta/v120-0-0';

	/**********
	* GLOBAL VARIABLES
	* NOT SIGNED-IN (PUBLIC)
	* VIEW LATEST FUNDING
	* **********/

	// Set all global data and session variables
	router.get('/' + version + '/not-signed-in/*', function (req, res, next) {				

		// Ensure that the default public service name (e.g. "Manage your education and skills funding") is NOT set
		// Instead set the sub service name: "View latest funding"
		req.session.publicServiceName = "VLF";

		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";

		return next();
	});

	/**********
	* NOT SIGNED-IN (PUBLIC)
	* VIEW LATEST FUNDING
	* **********/

	// Start page (MYESF)
	// NOTE: This has been left in as requested by the business, despite contradicting user research data
	router.get('/' + version + '/not-signed-in/view-latest-funding/start', function (req, res) {		
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'viewLatestFunding' : "true"
		});
	});
	router.post('/' + version + '/not-signed-in/view-latest-funding/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/view-latest-funding/start');
	});

	// Start page (VYF)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/start', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/start', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});
	router.post('/' + version + '/not-signed-in/view-latest-funding/latest/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/viewing-choice');
	});

	// Choose how to view funding
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/viewing-choice', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/viewing-choice', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/not-signed-in/view-latest-funding/latest/viewing-choice', function (req, res) {		
		
		var choice = req.body.choice;
		req.session.choice = choice;

		if (choice == "Organisation") {
			
			// Reset an error validation variable before user returns to this page
			req.session.radio = "";
			
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/find-an-organisation');	
		}
		else if (choice == "National") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/which-allocation');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/viewing-choice?error=true');
		}
		
	});
	
	/**********
	* NOT SIGNED-IN (PUBLIC)
	* VIEW LATEST FUNDING
	* AT NATIONAL LEVEL
	* **********/

	// Select a funding type
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/which-allocation', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/which-allocation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'error' : req.query.error
		});
	}); 
	router.post('/' + version + '/not-signed-in/view-latest-funding/latest/which-allocation', function (req, res) {		
		
		var fundingAllocationChoice = req.body.fundingAllocationChoice;
		req.session.fundingAllocationChoice = fundingAllocationChoice;		

		// Make sure the user chooses an option
		if (fundingAllocationChoice == "DSG") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/download-funding/2020-to-2021');	
		}
		else if (fundingAllocationChoice == "PE and sport") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/2019-to-2020');
		}
		else if (fundingAllocationChoice == "Pupil premium") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "Schools improvement") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "Teachers pay") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "School meal") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "Year 7") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/funding-type-unavailable');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/which-allocation?error=true');
		}
		
	});

	// Download funding allocations 
	// DSG
	// 2020 to 2021
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/download-funding/2020-to-2021', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/download-funding/2020-to-2021', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True'
		});
	});

	// Download funding allocations 
	// DSG
	// 2019 to 2020
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/download-funding/2019-to-2020', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/download-funding/2019-to-2020', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True'
		});
	});

	// Download historic allocations 
	// PE and Sport
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/choose-a-year', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/choose-a-year', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'error' : req.query.error
		});
	}); 
	router.post('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/choose-a-year', function (req, res) {		
		
		var yearChoice = req.body.yearChoice;
		req.session.yearChoice = yearChoice;		

		if (yearChoice == "PE 2018 to 2019") {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/2018-to-2019');	
		}
		else if (yearChoice == "PE 2017 to 2018") {
			res.redirect(href="https://www.gov.uk/government/publications/pe-and-sport-premium-funding-allocations-for-2017-to-2018");
		}
		else if (yearChoice == "PE 2016 to 2017") {
			res.redirect(href="https://www.gov.uk/government/publications/pe-and-sport-premium-funding-conditions-for-2016-to-2017");
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/choose-a-year?error=true');
		}
		
	});

	// Download funding allocations 
	// PE and sport premium 2019 to 2020
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/2019-to-2020', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/2019-to-2020', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// PE and sport premium 2018 to 2019
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/2018-to-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/download-funding/2018-to-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Funding type unavailable
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/funding-type-unavailable', function (req, res) {
		res.render(version + '/not-signed-in/view-latest-funding/latest/funding-type-unavailable', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'fundingAllocationChoice' : req.session.fundingAllocationChoice, 
			'choice' : req.session.choice
		});
	});

	// Find an organisation
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/find-an-organisation', function (req, res) {				
		res.render(version + '/not-signed-in/view-latest-funding/latest/find-an-organisation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'error' : req.query.error,
			'error1' : req.query.error1,
			'error2' : req.query.error2,
			'radio' : req.session.radio
		});
	});
	router.post('/' + version + '/not-signed-in/view-latest-funding/latest/find-an-organisation', function (req, res) {
		
		var searchOn = req.body.searchScope;
		var schoolOrAcademy = req.body.schoolOrAcademySearch.toLowerCase();
		// var mat = req.body.matSearch.toLowerCase();
		var la = req.body.laSearch.toLowerCase();
		
		if (searchOn == "Child") {

			// Added so we can see an error page (search term which returns zero results)
			if (schoolOrAcademy == "no results") {				
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "St Mary's Kilburn Church of England Primary School")
			else if (schoolOrAcademy == "st mary's" || schoolOrAcademy == "st marys" || schoolOrAcademy == "2023517") {
				
				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/statement');
			}
			// Show the error validation if a user enters a blank search term (e.g. "")
			else if (schoolOrAcademy == "") {
				
				req.session.radio = "Radio 1";
				
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/find-an-organisation?error=true&error1=true');
			}
			// Turn pagination on (search term on "abbey" or "Abbey" with > 25 results)
			else if (schoolOrAcademy == "abbey" || schoolOrAcademy == "paging" || schoolOrAcademy == "show filter search") {
				
				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "Yes";
				
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/did-you-mean?paginationRequired=true&page1=true');
			}
			// Show the did you mean page for anything else
			else {

				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/did-you-mean');
			}
			
		}
		/*
		else if (searchOn == "MAT") {

			req.session.searchScope = "MAT";
			req.session.searchTerm = mat;

			// Added so we can see an error page (search term which returns zero results)
			if (mat == "no results" || mat == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "White Rose Academies Trust")
			else if (mat == "white rose academies trust") {
				
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/statement');
			}
			// Show the did you mean page for anything else
			else {

				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/did-you-mean');
			}			
			
		}
		*/
		else if (searchOn == "LA") {

			req.session.searchScope = "LA";
			req.session.searchTerm = la;

			// Added so we can see an error page (search term which returns zero results)
			if (la == "no results") {
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "Camden")
			else if (la == "camden" || la == "202") {

				req.session.didYouMean = "No";

				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/statement');
			}
			// Show the error validation if a user enters a blank search term (e.g. "")
			else if (la == "") {

				req.session.radio = "Radio 2";
			
				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/find-an-organisation?error=true&error2=true');
			}
			// Show the did you mean page for anything else
			else {

				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/did-you-mean');
			}			
			
		}
		
	});

	// Did you mean (e.g. when there are multiple search results)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/did-you-mean', function (req, res) {			
		
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
		
		res.render(version + '/not-signed-in/view-latest-funding/latest/did-you-mean', {
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

	// Single funding statement page
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/statement', function (req, res) {			
		
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
		
		res.render(version + '/not-signed-in/view-latest-funding/latest/statement', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean,
			'toggleContent' : req.query.toggleContent,
			'glossaryTerms' : 'True',
			'term1' : dynamicTerm1,
			'term2' : dynamicTerm2,
			'term3' : dynamicTerm3,
			'term4' : dynamicTerm4
		});
	});

	/**********
	* NOT SIGNED-IN (PUBLIC)
	* VIEW LATEST FUNDING
	* AT INDIVIDUAL ORGANISATION LEVEL
	* **********/

	/**********
	* DSG
	* **********/

	// Allocation history  
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/allocation-history', function (req, res) {		
		res.render(version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/allocation-history', {
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
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/tab-choice', function (req, res) {		
		
		req.session.tab = req.query.tab;
		// Reset this variable to 0 so we can execute the dynamic tab functionality
		req.session.reloads = 0;
		var redirectURL = req.query.redirectURL;
		
		res.redirect('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/' + redirectURL);
	});

	// Full funding allocation (DSG: all 4 blocks)
	// LATEST (17 December 2019)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/17-12-2019', function (req, res) {
		 
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/17-12-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleContent' : req.query.toggleContent,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True',
			'term4' : 'True',
			'reloads' : req.session.reloads,
			'tab' : req.session.tab,
			'scenario' : req.query.scenario,
			'laprotection' : req.query.laprotection
		});
	});

	// Full funding allocation (DSG: all 4 blocks)
	// PREVIOUS (27 March 2019)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/27-03-2019', function (req, res) {
		 
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/27-03-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleContent' : req.query.toggleContent,
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
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/17-12-2018', function (req, res) {		
		
		// Increment the number so we only execute the dynamic tab functionality ONCE
		req.session.reloads++;
		
		res.render(version + '/not-signed-in/view-latest-funding/latest/dedicated-schools-grant/funding-breakdown/17-12-2018', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleContent' : req.query.toggleContent,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True',
			'reloads' : req.session.reloads,
			'tab' : req.session.tab
		});
	});

	/**********
	* PE AND SPORT PREMIUM
	* **********/

	// Allocation history  
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/allocation-history', function (req, res) {		
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/allocation-history', {
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
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/2018-to-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/2018-to-2019', {
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
	// LATEST (5 October 2019)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/5-10-2019', function (req, res) {		

		// Check for a URL query parameter override (e.g. when linking directly to this page)
		var urlParameterOverride = req.query.searchScope;

		if (urlParameterOverride == "LA") {
			req.session.searchScope = "LA";
		}

		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/5-10-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'noFilterResults' : req.query.noFilterResults,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// PREVIOUS (12 April 2019)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/12-04-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/12-04-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'noFilterResults' : req.query.noFilterResults,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// PREVIOUS (5 February 2019)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/5-02-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/5-02-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'versioning' : req.session.versioning,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'noFilterResults' : req.query.noFilterResults,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// HISTORIC FOR PRIMARY (2018 to 2019)
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/primary-2018-to-2019', function (req, res) {		
		res.render(version + '/not-signed-in/view-latest-funding/latest/pe-and-sport/funding-breakdown/primary-2018-to-2019', {
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
	* SERVICE & FEATURE PAGES
	* NOT SIGNED-IN (PUBLIC)
	* VIEW LATEST FUNDING
	* **********/
	
	// Display when users enter a search term which returns zero results
	router.get('/' + version + '/not-signed-in/view-latest-funding/latest/no-results', function (req, res) {
		
		// Reset an error validation variable before user returns to this page
		req.session.radio = "";
		
		res.render(version + '/not-signed-in/view-latest-funding/latest/no-results', {
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
