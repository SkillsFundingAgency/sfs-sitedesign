module.exports = function(router) {

	var version = 'beta/v102-0-0';

	/**********
	 * GLOBAL
	 * **********/

	// Ensure that the default public service name is NOT set
	router.get('/' + version + '/not-signed-in/*', function (req, res, next) {				
		
		req.session.publicServiceName = "True";

		return next();
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * **********/

	// Start page (MYESF)
	// LEGACY but left in to show what it should look like
	router.get('/' + version + '/not-signed-in/single-funding-statement/start', function (req, res) {		
		res.render(version + '/start', {
			'version' : version,
			'singleFundingStatement' : "true"
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/single-funding-statement/start');
	});

	// Start page (VYF)
	// DEFAULT
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/start', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/start', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/latest/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice');
	});

	// Choose how to view funding
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/viewing-choice', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice', function (req, res) {		
		
		var choice = req.body.choice;
		req.session.choice = choice;

		if (choice == "Organisation") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/find-an-organisation');	
		}
		else if (choice == "National") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/which-allocation');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice?error=true');
		}
		
	});
	
	/**********
	 * PUBLIC
	 * DOWNLOAD FUNDING 
	 * **********/

	// Select a funding type
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/which-allocation', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/which-allocation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'error' : req.query.error
		});
	}); 
	router.post('/' + version + '/not-signed-in/single-funding-statement/latest/which-allocation', function (req, res) {		
		
		var fundingAllocationChoice = req.body.fundingAllocationChoice;
		req.session.fundingAllocationChoice = fundingAllocationChoice;		

		// Make sure the user chooses an option
		if (fundingAllocationChoice == "DSG") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/download-funding/2019-to-2020');	
		}
		else if (fundingAllocationChoice == "PE and sport") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/2019-to-2020');
		}
		else if (fundingAllocationChoice == "Pupil premium") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "Schools improvement") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "Teachers pay") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "School meal") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/funding-type-unavailable');
		}
		else if (fundingAllocationChoice == "Year 7") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/funding-type-unavailable');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/which-allocation?error=true');
		}
		
	});

	// Download funding allocations 
	// DSG
	// 2019 to 2020
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/download-funding/2019-to-2020', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/download-funding/2019-to-2020', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True'
		});
	});

	// Download historic allocations 
	// PE and Sport
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/choose-a-year', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/choose-a-year', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'error' : req.query.error
		});
	}); 
	router.post('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/choose-a-year', function (req, res) {		
		
		var yearChoice = req.body.yearChoice;
		req.session.yearChoice = yearChoice;		

		if (yearChoice == "PE 2018 to 2019") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/2018-to-2019');	
		}
		else if (yearChoice == "PE 2017 to 2018") {
			res.redirect(href="https://www.gov.uk/government/publications/pe-and-sport-premium-funding-allocations-for-2017-to-2018");
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/choose-a-year?error=true');
		}
		
	});

	// Download funding allocations 
	// PE and sport premium 2019 to 2020
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/2019-to-2020', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/2019-to-2020', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// PE and sport premium 2018 to 2019
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/2018-to-2019', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding/2018-to-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

	// Funding type unavailable
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/funding-type-unavailable', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/funding-type-unavailable', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'fundingAllocationChoice' : req.session.fundingAllocationChoice, 
			'choice' : req.session.choice
		});
	});

	// Find an organisation
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/find-an-organisation', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/find-an-organisation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/latest/find-an-organisation', function (req, res) {
		
		var searchOn = req.body.searchScope;
		var schoolOrAcademy = req.body.schoolOrAcademySearch.toLowerCase();
		// var mat = req.body.matSearch.toLowerCase();
		var la = req.body.laSearch.toLowerCase();
		
		if (searchOn == "Child") {

			// Added so we can see an error page (search term which returns zero results)
			if (schoolOrAcademy == "no results" || schoolOrAcademy == "mole catch academy") {				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "St Mary's Kilburn Church of England Primary School")
			else if (schoolOrAcademy == "st mary's" || schoolOrAcademy == "st marys" || schoolOrAcademy == "2023517") {
				
				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Skips the did you mean page and finds a direct match (for "Regent High School")
			/*
			else if (schoolOrAcademy == "regent" || schoolOrAcademy == "regent high school") {
				
				req.session.searchScope = "Secondary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			*/
			// Show the did you mean page for anything else
			else {

				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/did-you-mean');
			}
			
		}
		/*
		else if (searchOn == "MAT") {

			req.session.searchScope = "MAT";
			req.session.searchTerm = mat;

			// Added so we can see an error page (search term which returns zero results)
			if (mat == "no results" || mat == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "White Rose Academies Trust")
			else if (mat == "white rose academies trust") {
				
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Show the did you mean page for anything else
			else {

				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/did-you-mean');
			}			
			
		}
		*/
		else if (searchOn == "LA") {

			req.session.searchScope = "LA";
			req.session.searchTerm = la;

			// Added so we can see an error page (search term which returns zero results)
			if (la == "no results" || la == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "Camden")
			else if (la == "camden" || la == "202") {

				req.session.didYouMean = "No";

				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Show the did you mean page for anything else
			else {

				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/did-you-mean');
			}			
			
		}
		
	});

	// Did you mean (e.g. when there are multiple search results)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/did-you-mean', function (req, res) {			
		res.render(version + '/not-signed-in/single-funding-statement/latest/did-you-mean', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean
		});
	});

	// Single funding statement page
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/statement', function (req, res) {			
		
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
		
		res.render(version + '/not-signed-in/single-funding-statement/latest/statement', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
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
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/allocation-history', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/allocation-history', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
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

	 // Full funding allocation (DSG: all 4 blocks)
	 // LATEST (27 March 2019)
	 router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/funding-breakdown/27-03-2019', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/funding-breakdown/27-03-2019', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True',
			'term4' : 'True'
		});
	});

	// Full funding allocation (DSG: all 4 blocks) 
	// PREVIOUS (17 December 2018)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/funding-breakdown/17-12-2018', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/funding-breakdown/17-12-2018', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'toggleVersion' : req.query.toggleVersion,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term3' : 'True'
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * PE AND SPORT
	 * **********/

	// Allocation history  
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/allocation-history', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/allocation-history', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean,
			'glossaryTerms' : 'True',
			'term1' : 'True',
			'term2' : 'True'
		});
	});

	// Full funding allocation (PE and Sport)
	// LATEST (5 October 2019)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/funding-breakdown/5-10-2019', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/funding-breakdown/5-10-2019', {
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
	// PREVIOUS (12 April 2019)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/funding-breakdown/12-04-2019', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/funding-breakdown/12-04-2019', {
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
	// PREVIOUS (5 February 2019)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/funding-breakdown/5-02-2019', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/funding-breakdown/5-02-2019', {
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

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * OTHER PAGES
	 * **********/

	// Glossary of terms
	router.get('/' + version + '/not-signed-in/glossary-of-terms', function (req, res) {
		res.render(version + '/not-signed-in/glossary-of-terms', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'glossaryTerms' : 'False'
		});
	});
	
	// Display when users enter a search term which returns zero results
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/no-results', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/no-results', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm,
			'glossaryTerms' : 'True',
			'term1' : 'True'
		});
	});

}
