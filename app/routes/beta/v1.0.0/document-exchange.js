module.exports = function(router) {

	var version = 'beta/v1.0.0';

	// Start
	router.get('/' + version + '/start', function (req, res) {
		res.render(version + '/start');
	});

	router.post('/' + version + '/start', function (req, res) {		
		res.redirect('/' + version + '/information-1');
	});

	// Information (Slide 1)
	router.get('/' + version + '/information-1', function (req, res) {
		res.render(version + '/information-1');
	});

	router.post('/' + version + '/information-1', function (req, res) {		
		res.redirect('/' + version + '/information-2');
	});

	// Information (Slide 2)
	router.get('/' + version + '/information-2', function (req, res) {
		res.render(version + '/information-2');
	});

	router.post('/' + version + '/information-2', function (req, res) {		
		res.redirect('/' + version + '/information-3');
	});

	// Information (Slide 3)
	router.get('/' + version + '/information-3', function (req, res) {
		res.render(version + '/information-3');
	});

	router.post('/' + version + '/information-3', function (req, res) {		
		res.redirect('/' + version + '/dashboard-a');
	});

	// Dashboard (version A)
	router.get('/' + version + '/dashboard-a', function (req, res) {
		res.render(version + '/dashboard-a');
	});

	// Dashboard (version A) - REFACTORED
	router.get('/' + version + '/dashboard-a-refactor', function (req, res) {
		res.render(version + '/dashboard-a-refactor');
	});

	// Dashboard (version B)
	router.get('/' + version + '/dashboard-b', function (req, res) {
		res.render(version + '/dashboard-b');
	});

	// Dashboard (version C)
	router.get('/' + version + '/dashboard-c', function (req, res) {
		res.render(version + '/dashboard-c');
	});

	// Document Exchange
	router.get('/' + version + '/document-exchange', function (req, res) {
		res.render(version + '/document-exchange');
	});

	// Received from ESFA
	router.get('/' + version + '/received-from-esfa', function (req, res) {
		res.render(version + '/received-from-esfa');
	});

	// Sent to ESFA
	router.get('/' + version + '/sent-to-esfa', function (req, res) {
		res.render(version + '/sent-to-esfa');
	});

	// Document Upload
	router.get('/' + version + '/document-upload', function (req, res) {
		res.render(version + '/document-upload');
	});

	// Document Upload Complete
	router.get('/' + version + '/document-upload-complete', function (req, res) {
		res.render(version + '/document-upload-complete');
	});

}
