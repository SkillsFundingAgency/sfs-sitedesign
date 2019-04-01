module.exports = function(router) {

	var version = 'beta/v20-0-0';

	/**********
	 * PUBLIC (2018 TO 2019)
	 * **********/

	// Start
	router.get('/' + version + '/not-signed-in/pe-and-sport/start', function (req, res) {		
		res.render(version + '/start', {
			'version' : version,
			'peAndSport' : "true"
		});
	});
	router.post('/' + version + '/not-signed-in/pe-and-sport/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/pe-and-sport/start');
	});
	
	// PE and Sport (Start)
	router.get('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/start', function (req, res) {
		res.render(version + '/not-signed-in/pe-and-sport/2018-to-2019/start', {
			'version' : version
		});
	});
	router.post('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/start', function (req, res) {		
		res.redirect('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/search-or-download');
	});

	// Search or download
	router.get('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/search-or-download', function (req, res) {
		res.render(version + '/not-signed-in/pe-and-sport/2018-to-2019/search-or-download', {
			'version' : version,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/search-or-download', function (req, res) {
		
		var searchOn = req.body.searchOrDownload;
		var nameOrLAENumber = req.body.nameOrLAENumber;
		var nameOrCode = req.body.nameOrCode;
		
		if (searchOn == "School or academy name or local authority establishment number") {
			
			req.session.searchTerm = nameOrLAENumber;

			// Added so we can see an error page (search term which returns zero results)
			if (nameOrLAENumber == "Foxford School" || nameOrLAENumber == "foxford school" || nameOrLAENumber == "Mole Catch Academy" || nameOrLAENumber == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/no-results');
			}
			else {
				res.redirect('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/name-or-lae-number');
			}
			
		}
		else if (searchOn == "Local authority name or code") {

			req.session.searchTerm = nameOrCode;

			// Added so we can see an error page (search term which returns zero results)
			if (nameOrCode == "Foxford School" || nameOrCode == "foxford school" || nameOrCode == "Mole Catch Academy" || nameOrCode == "mole catch academy") {
				res.redirect('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/no-results');
			}
			else {
				res.redirect('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/name-or-code');
			}			
			
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/search-or-download?error=true');
		}
		
	});

	/**********
	 * ERROR PAGES
	 * **********/

	// Display when users enter a search term which returns zero results
	router.get('/' + version + '/not-signed-in/pe-and-sport/2018-to-2019/no-results', function (req, res) {
		res.render(version + '/not-signed-in/pe-and-sport/2018-to-2019/no-results', {
			'version' : version,
			'searchTerm' : req.session.searchTerm
		});
	});

}
