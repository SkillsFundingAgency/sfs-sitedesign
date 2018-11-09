module.exports = function(router) {

	var version = 'beta/v11-0-0';

	/**********
	 * EXTERNAL USERS
	 * **********/

	// Start
	router.get('/' + version + '/external/document-exchange/start', function (req, res) {
		res.render(version + '/start');
	});
	router.post('/' + version + '/external/document-exchange/start', function (req, res) {		
		res.redirect('/' + version + '/external/document-exchange/dashboard');
	});

	// Dashboard
	router.get('/' + version + '/external/document-exchange/dashboard', function (req, res) {
		res.render(version + '/external/dashboard');
	});

	// Document Exchange (Home)
	router.get('/' + version + '/external/document-exchange/home', function (req, res) {
		res.render(version + '/external/document-exchange/home');
	});

	// Received from ESFA (ALL)
	router.get('/' + version + '/external/document-exchange/received-from-esfa', function (req, res) {
		res.render(version + '/external/document-exchange/received-from-esfa');
	});

	// Received fromESFA (2017-2018)
	router.get('/' + version + '/external/document-exchange/received-from-esfa-2017-2018', function (req, res) {
		res.render(version + '/external/document-exchange/received-from-esfa-2017-2018');
	});

	// Received from ESFA (2018-2019)
	router.get('/' + version + '/external/document-exchange/received-from-esfa-2018-2019', function (req, res) {
		res.render(version + '/external/document-exchange/received-from-esfa-2018-2019');
	});

	// Received from ESFA (NONE)
	router.get('/' + version + '/external/document-exchange/received-from-esfa-none', function (req, res) {
		res.render(version + '/external/document-exchange/received-from-esfa-none');
	});

	// Sent to ESFA (ALL)
	router.get('/' + version + '/external/document-exchange/sent-to-esfa', function (req, res) {
		res.render(version + '/external/document-exchange/sent-to-esfa');
	});

	// Sent to ESFA (2017-2018)
	router.get('/' + version + '/external/document-exchange/sent-to-esfa-2017-2018', function (req, res) {
		res.render(version + '/external/document-exchange/sent-to-esfa-2017-2018');
	});

	// Sent to ESFA (2018-2019)
	router.get('/' + version + '/external/document-exchange/sent-to-esfa-2018-2019', function (req, res) {
		res.render(version + '/external/document-exchange/sent-to-esfa-2018-2019');
	});

	// Sent to ESFA (NONE)
	router.get('/' + version + '/external/document-exchange/sent-to-esfa-none', function (req, res) {
		res.render(version + '/external/document-exchange/sent-to-esfa-none');
	});

	// Document Upload File Type
	router.get('/' + version + '/external/document-exchange/document-upload-file-type', function (req, res) {
		res.render(version + '/external/document-exchange/document-upload-file-type', {
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/external/document-exchange/document-upload-file-type', function (req, res) {		
		
		var fileType = req.body.fileType;

		// Make sure the user chooses an option
		if (fileType == undefined) {
			res.redirect('/' + version + '/external/document-exchange/document-upload-file-type?error=true');
		}
		// Success
		else {
			res.redirect('/' + version + '/external/document-exchange/document-upload');
		}
		
	});

	// Document Upload
	router.get('/' + version + '/external/document-exchange/document-upload', function (req, res) {
		res.render(version + '/external/document-exchange/document-upload');
	});

	// Document Upload (Replace)
	router.get('/' + version + '/external/document-exchange/document-upload-replace', function (req, res) {		
		res.render(version + '/external/document-exchange/document-upload-replace');
	});

	// Document Upload Complete
	router.get('/' + version + '/external/document-exchange/document-upload-complete', function (req, res) {
		res.render(version + '/external/document-exchange/document-upload-complete');
	});
	router.post('/' + version + '/external/document-exchange/document-upload-complete', function (req, res) {		
		res.redirect('/' + version + '/external/document-exchange/dashboard');
	});

	// Document Upload (Replace) Complete
	router.get('/' + version + '/external/document-exchange/document-upload-replace-complete', function (req, res) {
		res.render(version + '/external/document-exchange/document-upload-replace-complete');
	});
	router.post('/' + version + '/external/document-exchange/document-upload-replace-complete', function (req, res) {		
		res.redirect('/' + version + '/external/document-exchange/sent-to-esfa');
	});

	/**********
	 * INTERNAL USERS
	 * **********/

	// Start
	router.get('/' + version + '/internal/document-exchange/start', function (req, res) {
		res.render(version + '/start');
	});
	router.post('/' + version + '/internal/document-exchange/start', function (req, res) {		
		res.redirect('/' + version + '/internal/document-exchange/dashboard');
	});

	// Dashboard
	router.get('/' + version + '/internal/document-exchange/dashboard', function (req, res) {
		res.render(version + '/internal/dashboard');
	});

	// Document Exchange (Home)
	router.get('/' + version + '/internal/document-exchange/home', function (req, res) {
		res.render(version + '/internal/document-exchange/home');
	});

	// Documents to Publish
	router.get('/' + version + '/internal/document-exchange/documents-to-publish', function (req, res) {		
		res.render(version + '/internal/document-exchange/documents-to-publish', {
			'error' : req.query.error,
			'error1' : req.query.error1,
			'error2' : req.query.error2,
			'error3' : req.query.error3,
			'error4' : req.query.error4,
			'error5' : req.query.error5,
			'error6' : req.query.error6,
			'pagingRequired' : req.query.pagingRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2
		});
	});
	router.post('/' + version + '/internal/document-exchange/documents-to-publish', function (req, res) {		
		res.redirect('/' + version + '/internal/document-exchange/documents-to-publish?error=true');
	});

}
