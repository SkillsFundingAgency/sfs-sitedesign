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
			'version' : version
		});
	});

}
