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
		
		req.session.idams = "external";
		
		res.render(version + '/external/dashboard', {
			'idams' : req.session.idams
		});
	});

	// Document Exchange (Home)
	router.get('/' + version + '/external/document-exchange/home', function (req, res) {
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/home', {
			'idams' : req.session.idams
		});
	});

	// Received from ESFA
	router.get('/' + version + '/external/document-exchange/received-from-esfa', function (req, res) {
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/received-from-esfa', {
			'idams' : req.session.idams
		});
	});

	// Sent to ESFA
	router.get('/' + version + '/external/document-exchange/sent-to-esfa', function (req, res) {
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/sent-to-esfa', {
			'idams' : req.session.idams
		});
	});

	// Document Upload File Type
	router.get('/' + version + '/external/document-exchange/document-upload-file-type', function (req, res) {
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/document-upload-file-type', {
			'idams' : req.session.idams,
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
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/document-upload', {
			'idams' : req.session.idams
		});		
	});
	router.post('/' + version + '/external/document-exchange/document-upload', function (req, res) {		

		req.session.fileName = req.body.fileName;
		
		res.redirect('/' + version + '/external/document-exchange/document-upload-complete');
	});

	// Document Upload (Replace)
	router.get('/' + version + '/external/document-exchange/document-upload-replace', function (req, res) {		
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/document-upload-replace', {
			'idams' : req.session.idams
		});		
	});
	router.post('/' + version + '/external/document-exchange/document-upload-replace', function (req, res) {		

		req.session.fileName = req.body.fileName;
		
		res.redirect('/' + version + '/external/document-exchange/document-upload-replace-complete');
	});

	// Document Upload Complete
	router.get('/' + version + '/external/document-exchange/document-upload-complete', function (req, res) {
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/document-upload-complete', {
			'idams' : req.session.idams,
			'fileName' : req.session.fileName
		});
	});
	router.post('/' + version + '/external/document-exchange/document-upload-complete', function (req, res) {		
		res.redirect('/' + version + '/external/document-exchange/dashboard');
	});

	// Document Upload (Replace) Complete
	router.get('/' + version + '/external/document-exchange/document-upload-replace-complete', function (req, res) {
		
		req.session.idams = "external";
		
		res.render(version + '/external/document-exchange/document-upload-replace-complete', {
			'idams' : req.session.idams,
			'fileName' : req.session.fileName
		});
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
		
		req.session.idams = "internal";
		
		res.render(version + '/internal/dashboard', {
			'idams' : req.session.idams
		});
	});

	// Document Exchange (Home)
	router.get('/' + version + '/internal/document-exchange/home', function (req, res) {
		
		req.session.idams = "internal";
		
		res.render(version + '/internal/document-exchange/home', {
			'idams' : req.session.idams
		});
	});

	// Documents to Publish
	router.get('/' + version + '/internal/document-exchange/documents-to-publish', function (req, res) {		
		
		req.session.idams = "internal";
		
		res.render(version + '/internal/document-exchange/documents-to-publish', {
			'idams' : req.session.idams,
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
