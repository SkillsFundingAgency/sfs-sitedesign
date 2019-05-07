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
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/start', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/start', {
			'version' : version
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/find-an-organisation');
	});

	// Find an organisation
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/find-an-organisation', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/find-an-organisation', {
			'version' : version,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/find-an-organisation', function (req, res) {
		
		var searchOn = req.body.searchScope;
		var schoolOrAcademy = req.body.schoolOrAcademySearch.toLowerCase();
		var mat = req.body.matSearch.toLowerCase();
		var la = req.body.laSearch.toLowerCase();
		
		if (searchOn == "Child") {

			// Added so we can see an error page (search term which returns zero results)
			if (schoolOrAcademy == "no results" || schoolOrAcademy == "mole catch academy") {				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "St Mary's Kilburn Church of England Primary School")
			else if (schoolOrAcademy == "st mary's" || schoolOrAcademy == "st marys") {
				
				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/statement');
			}
			// Skips the did you mean page and finds a direct match (for "Regent High School")
			else if (schoolOrAcademy == "regent" || schoolOrAcademy == "regent high school") {
				
				req.session.searchScope = "Secondary";
				req.session.searchTerm = schoolOrAcademy;
				
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/statement');
			}
			// Show the did you mean page for anything else
			else {

				req.session.searchScope = "Primary";
				req.session.searchTerm = schoolOrAcademy;

				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/did-you-mean');
			}
			
		}
		else if (searchOn == "MAT") {

			req.session.searchScope = "MAT";
			req.session.searchTerm = mat;

			// Added so we can see an error page (search term which returns zero results)
			if (mat == "no results" || mat == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "White Rose Academies Trust")
			else if (mat == "white rose academies trust") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/statement');
			}
			// Show the did you mean page for anything else
			else {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/did-you-mean');
			}			
			
		}
		else if (searchOn == "LA") {

			req.session.searchScope = "LA";
			req.session.searchTerm = la;

			// Added so we can see an error page (search term which returns zero results)
			if (la == "no results" || la == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/no-results');
			}
			// Skips the did you mean page and finds a direct match (for "Camden")
			else if (la == "camden") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/statement');
			}
			// Show the did you mean page for anything else
			else {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/did-you-mean');
			}			
			
		}
		
	});

	// Did you mean (e.g. when there are multiple search results)
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/did-you-mean', function (req, res) {			
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/did-you-mean', {
			'version' : version,
			'searchScope' : req.session.searchScope,
			'searchTerm' : req.session.searchTerm
		});
	});

	// Single funding statement page
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/statement', function (req, res) {			
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/statement', {
			'version' : version,
			'searchScope' : req.session.searchScope
		});
	});

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT (2018 TO 2019)
	 * DSG
	 * **********/

	/**********
	 * PUBLIC
	 * SINGLE FUNDING STATEMENT (2018 TO 2019)
	 * PE AND SPORT
	 * **********/

	// Full funding allocation (PE and Sport)
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/full-funding-allocation', function (req, res) {		
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/full-funding-allocation', {
			'version' : version,
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
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/no-results', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/no-results', {
			'version' : version,
			'searchTerm' : req.session.searchTerm
		});
	});

}
