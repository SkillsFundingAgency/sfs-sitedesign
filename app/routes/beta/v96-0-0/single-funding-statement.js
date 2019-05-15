module.exports = function(router) {

	var version = 'beta/v96-0-0';

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT (2018 TO 2019)
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
			'version' : version
		});
	});

	// Public funding information (Start)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/start', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/start', {
			'version' : version
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/latest/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice');
	});

	// Viewing choice
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/viewing-choice', {
			'version' : version,
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
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/download-funding-allocations');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/viewing-choice?error=true');
		}
		
	});

	// Download funding allocations (Spreadsheets)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/download-funding-allocations', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/download-funding-allocations', {
			'version' : version,
			'choice' : req.session.choice
		});
	});

	// Find an organisation
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/find-an-organisation', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/find-an-organisation', {
			'version' : version,
			'choice' : req.session.choice,
			'error' : req.query.error
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
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Skips the did you mean page and finds a direct match (for "Regent High School")
			else if (schoolOrAcademy == "regent" || schoolOrAcademy == "regent high school") {
				
				req.session.searchScope = "Secondary";
				req.session.searchTerm = schoolOrAcademy;
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Show the did you mean page for anything else
			else {

				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;

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
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Show the did you mean page for anything else
			else {
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
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/statement');
			}
			// Show the did you mean page for anything else
			else {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/latest/did-you-mean');
			}			
			
		}
		
	});

	// Did you mean (e.g. when there are multiple search results)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/did-you-mean', function (req, res) {			
		res.render(version + '/not-signed-in/single-funding-statement/latest/did-you-mean', {
			'version' : version,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm
		});
	});

	// Single funding statement page
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/statement', function (req, res) {			
		res.render(version + '/not-signed-in/single-funding-statement/latest/statement', {
			'version' : version,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT (2018 TO 2019)
	 * DSG
	 * **********/

	 // Full funding allocation (DSG: all 4 blocks)
	 router.get('/' + version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/full-funding-allocation', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/full-funding-allocation', {
			'version' : version,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT (2018 TO 2019)
	 * PE AND SPORT
	 * **********/

	// Full funding allocation (PE and Sport)
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/full-funding-allocation', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/latest/pe-and-sport/full-funding-allocation', {
			'version' : version,
			'choice' : req.session.choice,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT (2018 TO 2019)
	 * ERROR PAGES
	 * **********/

	// Display when users enter a search term which returns zero results
	router.get('/' + version + '/not-signed-in/single-funding-statement/latest/no-results', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/latest/no-results', {
			'version' : version,
			'choice' : req.session.choice,
			'searchTerm' : req.session.searchTerm
		});
	});

}
