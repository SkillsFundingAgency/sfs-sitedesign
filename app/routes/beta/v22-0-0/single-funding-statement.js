module.exports = function(router) {

	var version = 'beta/v22-0-0';

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

	// Single Funding Statement (Start)
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
		
		var searchOn = req.body.searchOrDownload;
		var nameOrLAENumber = req.body.nameOrLAENumber;
		var nameOrCode = req.body.nameOrCode;
		
		if (searchOn == "School or academy name or local authority establishment number") {
			
			req.session.searchScope = "Child";
			req.session.searchTerm = nameOrLAENumber;

			// Added so we can see an error page (search term which returns zero results)
			if (nameOrLAENumber == "No Results" || nameOrLAENumber == "no results" || nameOrLAENumber == "Mole Catch Academy" || nameOrLAENumber == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/no-results');
			}
			else {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/did-you-mean');
			}
			
		}
		else if (searchOn == "Local authority name or code") {

			req.session.searchScope = "Parent";
			req.session.searchTerm = nameOrCode;

			// Added so we can see an error page (search term which returns zero results)
			if (nameOrCode == "No Results" || nameOrCode == "no results" || nameOrCode == "Mole Catch Academy" || nameOrCode == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/no-results');
			}
			else {
				res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/did-you-mean');
			}			
			
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/find-an-organisation?error=true');
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

	// PE and Sport (Start)
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/start', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/start', {
			'version' : version
		});
	});
	router.post('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/?');
	});

	// Search result (e.g. when 1 unique result found)
	router.get('/' + version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/search-result', function (req, res) {
		res.render(version + '/not-signed-in/single-funding-statement/2018-to-2019/pe-and-sport/search-result', {
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
