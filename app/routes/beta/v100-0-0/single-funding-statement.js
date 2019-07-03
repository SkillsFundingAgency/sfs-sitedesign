module.exports = function(router) {

	var version = 'beta/v100-0-0';

	/**********
	 * GLOBAL
	 * **********/

	// Ensure that the default public service name is NOT set
	router.get('/' + version + '/not-signed-in/single-funding-statement/*', function (req, res, next) {				
		
		req.session.publicServiceName = "True";

		return next();
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * **********/

	// Start
	router.get('/' + version + '/not-signed-in/single-funding-statement/start', function (req, res) {		
		res.render(version + '/start', {
			'version' : version,
			'singleFundingStatement' : "true"
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/single-funding-statement/start');
	});

	// Public funding information (Archive)
	router.get('/' + version + '/not-signed-in/single-funding-statement/archive', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/archive', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName
		});
	});

	// Public funding information (Start)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/start', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/start', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/latest/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice');
	});

	// Viewing choice
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

		if (choice == "Single Funding Statement") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/find-an-organisation');	
		}
		else if (choice == "Spreadsheet") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/which-allocation');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice?error=true');
		}
		
	});

	// Which funding allocation
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

		// Make sure the user chooses an option
		if (fundingAllocationChoice == "DSG") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/download-funding');	
		}
		else if (fundingAllocationChoice == "PE and sport") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding');
		}
		else if (fundingAllocationChoice == "Pupil premium") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/pupil-premium/download-funding');
		}
		else if (fundingAllocationChoice == "Year 7") {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/year-7-catch-up/download-funding');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/which-allocation?error=true');
		}
		
	});

	// Download funding allocations (DSG)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/download-funding', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/download-funding', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice
		});
	});

	// Download funding allocations (PE and sport premium)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/download-funding', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice
		});
	});

	// Download funding allocations (Pupil premium)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pupil-premium/download-funding', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/pupil-premium/download-funding', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice
		});
	});

	// Download funding allocations (Year 7 literacy and numeracy catch-up premium)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/year-7-catch-up/download-funding', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/year-7-catch-up/download-funding', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
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
		var mat = req.body.matSearch.toLowerCase();
		var la = req.body.laSearch.toLowerCase();
		
		if (searchOn == "Child") {

			// Added so we can see an error page (search term which returns zero results)
			if (schoolOrAcademy == "no results" || schoolOrAcademy == "mole catch academy") {				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "St Mary's Kilburn Church of England Primary School")
			else if (schoolOrAcademy == "st mary's" || schoolOrAcademy == "st marys") {
				
				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Skips the did you mean page and finds a direct match (for "Regent High School")
			else if (schoolOrAcademy == "regent" || schoolOrAcademy == "regent high school") {
				
				req.session.searchScope = "Secondary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "No";
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Show the did you mean page for anything else
			else {

				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				req.session.didYouMean = "Yes";

				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/did-you-mean');
			}
			
		}
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
		else if (searchOn == "LA") {

			req.session.searchScope = "LA";
			req.session.searchTerm = la;

			// Added so we can see an error page (search term which returns zero results)
			if (la == "no results" || la == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "Camden")
			else if (la == "camden") {

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
		res.render(version + '/not-signed-in/single-funding-statement/latest/statement', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'didYouMean' : req.session.didYouMean
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * DSG
	 * **********/

	 // Full funding allocation (DSG: all 4 blocks)
	 // CURRENT
	 router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/full-funding-allocation', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/full-funding-allocation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean
		});
	});

	// Full funding allocation (DSG: all 4 blocks) 
	// PREVIOUS (December)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/full-funding-allocation-december', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/full-funding-allocation-december', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * PE AND SPORT
	 * **********/

	// Full funding allocation (PE and Sport)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/full-funding-allocation', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/full-funding-allocation', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm,
			'didYouMean' : req.session.didYouMean
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT
	 * ERROR PAGES
	 * **********/

	// Display when users enter a search term which returns zero results
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/no-results', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/no-results', {
			'version' : version,
			'publicServiceName' : req.session.publicServiceName,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm
		});
	});

}
