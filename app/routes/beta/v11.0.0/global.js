module.exports = function(router) {

	var version = 'beta/v11.0.0';

	// Start
	router.get('/' + version + '/start', function (req, res) {
		res.render(version + '/start');
	});

	// Information (Slide 1)
	router.get('/' + version + '/information-1', function (req, res) {
		res.render(version + '/information-1');
	});

	// Information (Slide 2)
	router.get('/' + version + '/information-2', function (req, res) {
		res.render(version + '/information-2');
	});

	// Information (Slide 3)
	router.get('/' + version + '/information-3', function (req, res) {
		res.render(version + '/information-3');
	});

	// Dashboard (External)
	router.get('/' + version + '/external/dashboard', function (req, res) {
		res.render(version + '/external/dashboard');
	});

	// Dashboard (Internal)
	router.get('/' + version + '/internal/dashboard', function (req, res) {
		res.render(version + '/internal/dashboard');
	});

}
