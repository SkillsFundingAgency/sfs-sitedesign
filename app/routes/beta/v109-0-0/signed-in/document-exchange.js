module.exports = function(router) {

	var version = 'beta/v109-0-0';

	/**********
	* GLOBAL
	* **********/

	/*** EXTERNAL USERS - CHILD VIEW (SCHOOL & SINGLE ACADEMY) ***/
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/document-exchange/child/*', function (req, res, next) {				

		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";

		// Set the unique related URL for this feature journey
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/document-exchange/child/roles-and-permissions';
		
		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/document-exchange/child/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/document-exchange/child/start';

		return next();
	});

	/*** EXTERNAL USERS - PARENT VIEW (LA & MAT) ***/
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/external/document-exchange/parent/*', function (req, res, next) {				

		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";

		// Set the unique related URL for this feature journey		
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/external/document-exchange/parent/roles-and-permissions';

		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '/' + version + '/signed-in/external/document-exchange/parent/my-roles-and-permissions';
		req.session.signOutURL = '/' + version + '/signed-in/external/document-exchange/parent/start';

		return next();
	});

	/*** INTERNAL USERS ***/
	// Set a selection of global variables for all templates being reused
	router.get('/' + version + '/signed-in/internal/document-exchange/*', function (req, res, next) {				

		// Tells layout.html to use versioned HTML templates and partials (e.g. includes)
		req.session.versioning = "True";

		// Set the unique related URL for this feature journey
		req.session.userRolesAndPermissionsURL = '/' + version + '/signed-in/internal/document-exchange/roles-and-permissions';

		// Both needed for the global IDAMS account header
		req.session.myRolesAndPermissionsURL = '#';
		req.session.signOutURL = '/' + version + '/signed-in/internal/document-exchange/start';

		return next();
	});

	/**********
	* EXTERNAL USERS CHILD VIEW (SCHOOL & SINGLE ACADEMY)
	* **********/
	
	// Start
	router.get('/' + version + '/signed-in/external/document-exchange/child/start', function (req, res) {	
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'docExExternal' : "true"
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/child/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/document-exchange/child/dfe-sign-in/sign-in');
	});

	// User roles and permissions
	router.get('/' + version + '/signed-in/external/document-exchange/child/roles-and-permissions', function (req, res) {
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});

	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/document-exchange/child/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/child/dfe-sign-in/sign-in', function (req, res) {		
		
		// USABILITY TESTING ONLY
		req.session.receivedDocuments = "Yes";
		req.session.documentReceived1 = "New";
		req.session.documentReceived2 = "New";
		req.session.documentSent1 = "No";
		req.session.documentSent2 = "No";
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;

		// User is signing in as a Local Authority (LA) Training Provider (TP)
		if (username == "tp") {

			req.session.idams = "TP";
			req.session.child = "TP";

			res.redirect('/' + version + '/signed-in/external/document-exchange/child/dashboard');
		}
		// User is signing in as any other valid child education institution
		else if (username == "academy" || username == "college" || username == "school" || username == "sixth form") {
			
			req.session.idams = "other";
			req.session.child = "other";

			res.redirect('/' + version + '/signed-in/external/document-exchange/child/dashboard');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/document-exchange/child/dfe-sign-in/sign-in?error=true');
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/document-exchange/child/dashboard', function (req, res) {
	
		req.session.dashboard = "Yes";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";
		
		res.render(version + '/signed-in/external/document-exchange/dashboard', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'apprenticeshipServiceAccess' : req.query.apprenticeshipServiceAccess,
			'receivedDocuments' : req.session.receivedDocuments
		});
	});

	// Document Exchange (Home)
	router.get('/' + version + '/signed-in/external/document-exchange/child/home', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";
		
		res.render(version + '/signed-in/external/document-exchange/child/home', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'receivedDocuments' : req.session.receivedDocuments
		});
	});

	// Received from ESFA
	router.get('/' + version + '/signed-in/external/document-exchange/child/received-from-esfa', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";

		/***
		*	So we can update the individual labels for each of the NEW documents received from the ESFA
		*   INDIVIDUAL
		***/
		// Once downloaded hide NEW document received #1
		if (req.query.documentReceived1 == "Downloaded") {
			req.session.documentReceived1 = "Downloaded";
		}
		// Once downloaded hide NEW document received #2
		if (req.query.documentReceived2 == "Downloaded") {
			req.session.documentReceived2 = "Downloaded";
		}

		// We finally need to turn off the GLOBAL labels for NEW received documents for all of the journey
		// Check whether all NEW documents received have been downloaded...
		if (req.session.documentReceived1 == "Downloaded" && req.session.documentReceived2 == "Downloaded") {
			// Turn off global labels for ALL NEW received documents
			req.session.receivedDocuments = "No";
		}
		
		res.render(version + '/signed-in/external/document-exchange/child/received-from-esfa', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'receivedDocuments' : req.session.receivedDocuments,
			'documentReceived1' : req.session.documentReceived1,
			'documentReceived2' : req.session.documentReceived2
		});
	});

	// Sent to ESFA
	router.get('/' + version + '/signed-in/external/document-exchange/child/sent-to-esfa', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";
		// Reset all session variables for document upload (START)
		req.session.uploadedDocumentStatus = "";
		req.session.uploadedDocumentName = "";
		req.session.fileType = "";
		req.session.fileTypeVersion = "";
		
		res.render(version + '/signed-in/external/document-exchange/child/sent-to-esfa', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'documentSent1' : req.session.documentSent1,
			'documentSent2' : req.session.documentSent2
		});
	});

	// Document Upload File Type
	router.get('/' + version + '/signed-in/external/document-exchange/child/document-upload-file-type', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";
		// Reset all session variables for document upload (START)
		req.session.uploadedDocumentStatus = "";
		req.session.uploadedDocumentName = "";
		req.session.fileType = "";
		req.session.fileTypeVersion = "";
		
		res.render(version + '/signed-in/external/document-exchange/child/document-upload-file-type', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'error' : req.query.error,
			'uploadedDocumentStatus' : req.session.uploadedDocumentStatus,
			'uploadedDocumentName' : req.session.uploadedDocumentName,
			'fileType' : req.session.fileType
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/child/document-upload-file-type', function (req, res) {		
		
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";
		// Set the chosen document type as a session variable
		req.session.fileType = req.body.fileType;
		var fileType = req.session.fileType;

		// Set the version for any new document users send to the ESFA (based on what they have already sent)
		if (fileType == "Business case template" || fileType == "Business case" || fileType == "Business case audit evidence") {
			req.session.fileTypeVersion = "2";
		}
		else {
			req.session.fileTypeVersion = "1";
		}

		// Make sure the user chooses an option
		if (fileType == undefined) {
			res.redirect('/' + version + '/signed-in/external/document-exchange/child/document-upload-file-type?error=true');
		}
		// Success
		else {
			res.redirect('/' + version + '/signed-in/external/document-exchange/child/document-upload');
		}
		
	});

	// Document Upload
	router.get('/' + version + '/signed-in/external/document-exchange/child/document-upload', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";
		// Set the session variable if is does not exist
		req.session.uploadedDocumentStatus = req.session.uploadedDocumentStatus || "";
		req.session.uploadedDocumentName = req.session.uploadedDocumentName || "";
		req.session.fileType = req.session.fileType || "";
		req.session.fileTypeVersion = req.session.fileTypeVersion || "";
		
		res.render(version + '/signed-in/external/document-exchange/child/document-upload', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'error' : req.query.error,
			'uploadedDocumentStatus' : req.session.uploadedDocumentStatus,
			'uploadedDocumentName' : req.session.uploadedDocumentName,
			'fileType' : req.session.fileType,
			'fileTypeVersion' : req.session.fileTypeVersion
		});		
	});
	router.post('/' + version + '/signed-in/external/document-exchange/child/document-upload', function (req, res) {		

		req.session.fileName = req.body.fileName;
		
		res.redirect('/' + version + '/signed-in/external/document-exchange/child/document-upload-complete');
	});

	// Document Upload - Remove Document
	router.get('/' + version + '/signed-in/external/document-exchange/child/document-upload-remove', function (req, res) {
	
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";

		if (!req.session.uploadedDocumentName || req.session.uploadedDocumentName === undefined) {
			req.session.uploadedDocumentName = req.query.uploadedDocumentName;
		}
		
		res.render(version + '/signed-in/external/document-exchange/child/document-upload-remove', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'error' : req.query.error,
			'uploadedDocumentName' : req.session.uploadedDocumentName
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/child/document-upload-remove', function (req, res) {
		
		if (!req.session.uploadedDocumentName || req.session.uploadedDocumentName === undefined) {
			req.session.uploadedDocumentName = req.query.uploadedDocumentName;
		}

		var deleteDocument = req.body.deleteDocument;

		if (deleteDocument == "Yes") {
			res.redirect('/' + version + '/signed-in/external/document-exchange/child/document-upload-file-type');
		}
		else if (deleteDocument == "No") {

			// Tell the next page to show the last uploaded document information
			req.session.uploadedDocumentStatus = "Show";

			res.redirect('/' + version + '/signed-in/external/document-exchange/child/document-upload');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/document-exchange/child/document-upload-remove?error=true');
		}
		
	});

	// Document Upload Complete
	router.get('/' + version + '/signed-in/external/document-exchange/child/document-upload-complete', function (req, res) {
	
		// USABILITY TESTING ONLY
		if (req.session.fileType == "Business case" || req.session.fileType == "Business case template") {
			req.session.documentSent1 = "Yes";
		}
		else if (req.session.fileType == "Business case audit evidence return") {
			req.session.documentSent2 = "Yes";
		}

		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "other";
		req.session.child = req.session.child || "other";
		
		res.render(version + '/signed-in/external/document-exchange/child/document-upload-complete', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'child' : req.session.child,
			'fileName' : req.session.fileName
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/child/document-upload-complete', function (req, res) {		
		
		// Reset all session variables for document upload (END)
		req.session.uploadedDocumentStatus = "";
		req.session.uploadedDocumentName = "";
		req.session.fileType = "";
		
		res.redirect('/' + version + '/signed-in/external/document-exchange/child/home');
	});

	/**********
	* EXTERNAL USERS PARENT VIEW (LA & MAT)
	* **********/

	// Start
	router.get('/' + version + '/signed-in/external/document-exchange/parent/start', function (req, res) {		
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'docExExternal' : "true"
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/external/document-exchange/parent/dfe-sign-in/sign-in');
	});

	// User roles and permissions
	router.get('/' + version + '/signed-in/external/document-exchange/parent/roles-and-permissions', function (req, res) {
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});

	// DfE Sign-in
	router.get('/' + version + '/signed-in/external/document-exchange/parent/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/dfe-sign-in/sign-in', function (req, res) {		
		
		// USABILITY TESTING ONLY
		req.session.receivedDocuments = "Yes";
		req.session.documentReceived1 = "New";
		req.session.documentReceived2 = "New";
		req.session.documentReceived3 = "New";
		req.session.documentReceived4 = "New";
		req.session.documentReceived5 = "New";
		req.session.documentReceived6 = "New";
		req.session.documentReceived7 = "New";
		req.session.documentReceived8 = "New";
		req.session.documentReceived9 = "New";
		req.session.documentReceived10 = "New";
		req.session.documentReceived11 = "New";
		req.session.documentReceived12 = "New";
		req.session.documentReceived13 = "New";
		req.session.documentSent1 = "No";
		req.session.documentSent2 = "No";
		req.session.username = req.body.username.toLowerCase();
		var username = req.session.username;

		// User is signing in as a Local Authority (LA)
		if (username == "la") {

			req.session.idams = "LA";
			req.session.parent = "LA";

			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/dashboard');
		}
		// User is signing in as a Multi Academy Trust (MAT)
		else if (username == "mat") {
			
			req.session.idams = "MAT";
			req.session.parent = "MAT";

			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/dashboard');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/dfe-sign-in/sign-in?error=true');
		}
		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/external/document-exchange/parent/dashboard', function (req, res) {
		
		req.session.dashboard = "Yes";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		
		res.render(version + '/signed-in/external/document-exchange/dashboard', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'apprenticeshipServiceAccess' : req.query.apprenticeshipServiceAccess,
			'receivedDocuments' : req.session.receivedDocuments
		});
	});

	// Document Exchange (Home)
	router.get('/' + version + '/signed-in/external/document-exchange/parent/home', function (req, res) {
		
		req.session.dashboard = "No";
		// Only set the session variable if it does not exist
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		
		res.render(version + '/signed-in/external/document-exchange/parent/home', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'receivedDocuments' : req.session.receivedDocuments
		});
	});

	// Received from ESFA
	router.get('/' + version + '/signed-in/external/document-exchange/parent/received-from-esfa', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";

		/***
		*	So we can update the individual labels for each of the NEW documents received from the ESFA
		*   INDIVIDUAL
		***/
		// Once downloaded hide NEW document received #1
		if (req.query.documentReceived1 == "Downloaded") {
			req.session.documentReceived1 = "Downloaded";
		}
		// Once downloaded hide NEW document received #2
		if (req.query.documentReceived2 == "Downloaded") {
			req.session.documentReceived2 = "Downloaded";
		}
		// Once downloaded hide NEW document received #3
		if (req.query.documentReceived3 == "Downloaded") {
			req.session.documentReceived3 = "Downloaded";
		}
		// Once downloaded hide NEW document received #4
		if (req.query.documentReceived4 == "Downloaded") {
			req.session.documentReceived4 = "Downloaded";
		}
		// Once downloaded hide NEW document received #5
		if (req.query.documentReceived5 == "Downloaded") {
			req.session.documentReceived5 = "Downloaded";
		}
		// Once downloaded hide NEW document received #6
		if (req.query.documentReceived6 == "Downloaded") {
			req.session.documentReceived6 = "Downloaded";
		}
		// Once downloaded hide NEW document received #7
		if (req.query.documentReceived7 == "Downloaded") {
			req.session.documentReceived7 = "Downloaded";
		}
		// Once downloaded hide NEW document received #8
		if (req.query.documentReceived8 == "Downloaded") {
			req.session.documentReceived8 = "Downloaded";
		}
		// Once downloaded hide NEW document received #9
		if (req.query.documentReceived9 == "Downloaded") {
			req.session.documentReceived9 = "Downloaded";
		}
		// Once downloaded hide NEW document received #10
		if (req.query.documentReceived10 == "Downloaded") {
			req.session.documentReceived10 = "Downloaded";
		}
		// Once downloaded hide NEW document received #11
		if (req.query.documentReceived11 == "Downloaded") {
			req.session.documentReceived11 = "Downloaded";
		}
		// Once downloaded hide NEW document received #12
		if (req.query.documentReceived12 == "Downloaded") {
			req.session.documentReceived12 = "Downloaded";
		}
		// Once downloaded hide NEW document received #13
		if (req.query.documentReceived13 == "Downloaded") {
			req.session.documentReceived13 = "Downloaded";
		}

		/***
		*	So we can update the ALL labels in bulk for the NEW documents received from the ESFA
		*   BULK (ALL)
		***/
		if (req.query.alldocumentsReceived == "Downloaded") {
			// Turn off global labels for ALL NEW received documents
			req.session.receivedDocuments = "No";
			req.session.documentReceived1 = "Downloaded";
			req.session.documentReceived2 = "Downloaded";
			req.session.documentReceived3 = "Downloaded";
			req.session.documentReceived4 = "Downloaded";
			req.session.documentReceived5 = "Downloaded";
			req.session.documentReceived6 = "Downloaded";
			req.session.documentReceived7 = "Downloaded";
			req.session.documentReceived8 = "Downloaded";
			req.session.documentReceived9 = "Downloaded";
			req.session.documentReceived10 = "Downloaded";
			req.session.documentReceived11 = "Downloaded";
			req.session.documentReceived12 = "Downloaded";
			req.session.documentReceived13 = "Downloaded";
		}

		// We finally need to turn off the GLOBAL labels for NEW received documents for all of the journey
		if (req.session.parent == "MAT") {

			// Now check whether all NEW documents received (2 for MATs) have been downloaded...
			if (req.session.documentReceived1 == "Downloaded" && req.session.documentReceived2 == "Downloaded") {
				// Turn off global labels for ALL NEW received documents
				req.session.receivedDocuments = "No";
			}
			
		}
		else if (req.session.parent == "LA") {

			// Now check whether all NEW documents received (13 for LAs) have been downloaded...
			if (req.session.documentReceived1 == "Downloaded" && req.session.documentReceived2 == "Downloaded" && req.session.documentReceived3 == "Downloaded" && req.session.documentReceived4 == "Downloaded" && req.session.documentReceived5 == "Downloaded" && req.session.documentReceived6 == "Downloaded" && req.session.documentReceived7 == "Downloaded" && req.session.documentReceived8 == "Downloaded" && req.session.documentReceived9 == "Downloaded" && req.session.documentReceived10 == "Downloaded" && req.session.documentReceived11 == "Downloaded" && req.session.documentReceived12 == "Downloaded" && req.session.documentReceived13 == "Downloaded") {
				// Turn off global labels for ALL NEW received documents
				req.session.receivedDocuments = "No";
			}

		}
		
		res.render(version + '/signed-in/external/document-exchange/parent/received-from-esfa', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'receivedDocuments' : req.session.receivedDocuments,
			'documentReceived1' : req.session.documentReceived1,
			'documentReceived2' : req.session.documentReceived2,
			'documentReceived3' : req.session.documentReceived3,
			'documentReceived4' : req.session.documentReceived4,
			'documentReceived5' : req.session.documentReceived5,
			'documentReceived6' : req.session.documentReceived6,
			'documentReceived7' : req.session.documentReceived7,
			'documentReceived8' : req.session.documentReceived8,
			'documentReceived9' : req.session.documentReceived9,
			'documentReceived10' : req.session.documentReceived10,
			'documentReceived11' : req.session.documentReceived11,
			'documentReceived12' : req.session.documentReceived12,
			'documentReceived13' : req.session.documentReceived13,
			'alldocumentsReceived' : req.session.alldocumentsReceived,
			'error' : req.query.error,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3,
			'totalListCount' : 30,
			'clearLocalStorage' : true,
			'itemsPerPage' : 10,
			'itemTypeLabel' : "document",
			'itemTypeLabelPlural' : "documents"
		});
	});

	// Sent to ESFA
	router.get('/' + version + '/signed-in/external/document-exchange/parent/sent-to-esfa', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		// Reset all session variables for document upload (START)
		req.session.uploadedDocumentStatus = "";
		req.session.uploadedDocumentName = "";
		req.session.fileType = "";
		req.session.fileTypeVersion = "";
		
		res.render(version + '/signed-in/external/document-exchange/parent/sent-to-esfa', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'documentSent1' : req.session.documentSent1,
			'documentSent2' : req.session.documentSent2
		});
	});

	// Select an organisation
	router.get('/' + version + '/signed-in/external/document-exchange/parent/select-organisation', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		// Reset all session variables for document upload (START)
		req.session.uploadedDocumentStatus = "";
		req.session.uploadedDocumentName = "";
		
		res.render(version + '/signed-in/external/document-exchange/parent/select-organisation', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'error' : req.query.error,
			'uploadedDocumentStatus' : req.session.uploadedDocumentStatus,
			'uploadedDocumentName' : req.session.uploadedDocumentName
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/select-organisation', function (req, res) {		
		
		var organisationType = req.body.organisationType;

		if (organisationType == "Rupert Shoggins Academy Trust") {

			req.session.sendFrom = organisationType;

			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload-file-type');
		}
		else if (organisationType == "A specific academy") {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/select-academy-or-school?paginationRequired=true&page1=true');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/select-organisation?error=true');
		}
		
	});

	// Select an academy or school
	router.get('/' + version + '/signed-in/external/document-exchange/parent/select-academy-or-school', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";

		res.render(version + '/signed-in/external/document-exchange/parent/select-academy-or-school', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'error' : req.query.error,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/select-academy-or-school', function (req, res) {		
		
		req.session.academyOrSchoolName = req.body.academyOrSchoolName;
		var academyOrSchoolName = req.session.academyOrSchoolName;

		// Make sure the user chooses an option
		if (academyOrSchoolName == undefined) {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/select-academy-or-school?paginationRequired=true&page1=true&error=true');
		}
		// Success
		else {
			
			req.session.sendFrom = academyOrSchoolName;
			
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload-file-type');
		}
		
	});

	// Document Upload File Type
	router.get('/' + version + '/signed-in/external/document-exchange/parent/document-upload-file-type', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		// Reset all session variables for document upload (START)
		req.session.uploadedDocumentStatus = "";
		req.session.uploadedDocumentName = "";
		req.session.fileType = "";
		req.session.fileTypeVersion = "";

		// Set the sendFrom variable for the LA since it will always be from just the LA
		if (req.session.parent == "LA") {
			req.session.sendFrom = "Redhill Council";
		}
		
		res.render(version + '/signed-in/external/document-exchange/parent/document-upload-file-type', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'sendFrom' : req.session.sendFrom,
			'error' : req.query.error,
			'uploadedDocumentStatus' : req.session.uploadedDocumentStatus,
			'uploadedDocumentName' : req.session.uploadedDocumentName,
			'fileType' : req.session.fileType
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/document-upload-file-type', function (req, res) {

		// Set the chosen document type as a session variable
		req.session.fileType = req.body.fileType;
		var fileType = req.session.fileType;
		
		// USABILITY TESTING ONLY
		if (req.session.sendFrom == "Rupert Shoggins Academy Trust") {
			
			// Set the correct document version for this document type only (based on what they have already sent)
			if (fileType == "RPA certificate") {
				req.session.fileTypeVersion = "2";
			}
			else {
				req.session.fileTypeVersion = "1";
			}

		}
		else if (req.session.sendFrom == "Redhill Council") {
			
			// Set the correct document version for this document type only (based on what they have already sent)
			if (fileType == "Data sharing protocol") {
				req.session.fileTypeVersion = "2";
			}
			else {
				req.session.fileTypeVersion = "1";
			}

		}
		else {
			req.session.fileTypeVersion = "1";
		}

		// Make sure the user chooses an option
		if (fileType == undefined) {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload-file-type?error=true');
		}
		// Success
		else {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload');
		}
		
	});

	// Document Upload
	router.get('/' + version + '/signed-in/external/document-exchange/parent/document-upload', function (req, res) {

		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		// Set the session variable if is does not exist
		req.session.uploadedDocumentStatus = req.session.uploadedDocumentStatus || "";
		req.session.uploadedDocumentName = req.session.uploadedDocumentName || "";
		req.session.fileType = req.session.fileType || "";
		req.session.fileTypeVersion = req.session.fileTypeVersion || "";
		
		res.render(version + '/signed-in/external/document-exchange/parent/document-upload', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'error' : req.query.error,
			'sendFrom' : req.session.sendFrom,
			'uploadedDocumentStatus' : req.session.uploadedDocumentStatus,
			'uploadedDocumentName' : req.session.uploadedDocumentName,
			'fileType' : req.session.fileType,
			'fileTypeVersion' : req.session.fileTypeVersion
		});		
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/document-upload', function (req, res) {		

		req.session.fileName = req.body.fileName;
		
		res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload-complete');
	});

	// Document Upload - Remove Document
	router.get('/' + version + '/signed-in/external/document-exchange/parent/document-upload-remove', function (req, res) {
	
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";

		if (!req.session.uploadedDocumentName || req.session.uploadedDocumentName === undefined) {
			req.session.uploadedDocumentName = req.query.uploadedDocumentName;
		}
		
		res.render(version + '/signed-in/external/document-exchange/parent/document-upload-remove', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'sendFrom' : req.session.sendFrom,
			'error' : req.query.error,
			'uploadedDocumentName' : req.session.uploadedDocumentName
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/document-upload-remove', function (req, res) {
		
		if (!req.session.uploadedDocumentName || req.session.uploadedDocumentName === undefined) {
			req.session.uploadedDocumentName = req.query.uploadedDocumentName;
		}

		var deleteDocument = req.body.deleteDocument;

		if (deleteDocument == "Yes") {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload-file-type');
		}
		else if (deleteDocument == "No") {

			// Tell the next page to show the last uploaded document information
			req.session.uploadedDocumentStatus = "Show";

			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/external/document-exchange/parent/document-upload-remove?error=true');
		}
		
	});

	// Document Upload Complete
	router.get('/' + version + '/signed-in/external/document-exchange/parent/document-upload-complete', function (req, res) {
	
		// USABILITY TESTING ONLY
		if (req.session.fileType == "RPA certificate" || req.session.fileType == "Data sharing protocol") {
			req.session.documentSent1 = "Yes";
		}
		else if (req.session.fileType == "Infrastructure template") {
			req.session.documentSent2 = "Yes";
		}

		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		
		res.render(version + '/signed-in/external/document-exchange/parent/document-upload-complete', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'dashboard' : req.session.dashboard,
			'idams' : req.session.idams,
			'parent' : req.session.parent,
			'sendFrom' : req.session.sendFrom,
			'fileName' : req.session.fileName
		});
	});
	router.post('/' + version + '/signed-in/external/document-exchange/parent/document-upload-complete', function (req, res) {		
		
		// Reset all session variables for document upload (END)
		req.session.uploadedDocumentStatus = "";
		req.session.uploadedDocumentName = "";
		req.session.fileType = "";
		
		res.redirect('/' + version + '/signed-in/external/document-exchange/parent/home');
	});

	/**********
	* INTERNAL USERS
	* **********/

	// Start
	router.get('/' + version + '/signed-in/internal/document-exchange/start', function (req, res) {		
		res.render(version + '/start', {
			'version' : version,
			'versioning' : req.session.versioning,
			'userRolesAndPermissionsURL' : req.session.userRolesAndPermissionsURL,
			'docExInternal' : "true"
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/start', function (req, res) {		
		res.redirect('/' + version + '/signed-in/internal/document-exchange/dfe-sign-in/sign-in');
	});

	// User roles and permissions
	router.get('/' + version + '/signed-in/internal/document-exchange/roles-and-permissions', function (req, res) {
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});

	// DfE Sign-in
	router.get('/' + version + '/signed-in/internal/document-exchange/dfe-sign-in/sign-in', function (req, res) {
		res.render(version + '/dfe-sign-in/sign-in', {
			'version' : version,
			'versioning' : req.session.versioning,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/dfe-sign-in/sign-in', function (req, res) {		
		res.redirect('/' + version + '/signed-in/internal/document-exchange/dashboard');		
	});

	// Dashboard
	router.get('/' + version + '/signed-in/internal/document-exchange/dashboard', function (req, res) {
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/dashboard', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// Document Exchange (Home)
	router.get('/' + version + '/signed-in/internal/document-exchange/home', function (req, res) {
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/home', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// File Share
	router.get('/' + version + '/signed-in/internal/document-exchange/file-share', function (req, res) {
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/file-share', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});

	// Documents to Publish
	router.get('/' + version + '/signed-in/internal/document-exchange/documents-to-publish', function (req, res) {		
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/documents-to-publish', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,			
			'error' : req.query.error,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'page3' : req.query.page3,
			'page4' : req.query.page4,
			'page5' : req.query.page5,
			'page6' : req.query.page6,
			'totalListCount' : 54,
			'clearLocalStorage' : true,
			'itemsPerPage' : 10,
			'itemTypeLabel' : "document",
			'itemTypeLabelPlural' : "documents"
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/documents-to-publish', function (req, res) {		
		res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-confirm');
	});

	// Documents to Publish (Are you sure?)
	router.get('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-confirm', function (req, res) {		
	
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/documents-to-publish-confirm', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-confirm', function (req, res) {		

		var publishConfirm = req.body.publishConfirm;
		
		if (publishConfirm == "Yes") {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-confirmation');
		}
		else if (publishConfirm == "No") {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-publish?paginationRequired=true&page1=true');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-confirm?error=true');
		}
		
	});

	// Documents to Publish (Confirmation)
	router.get('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-confirmation', function (req, res) {		

		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/documents-to-publish-confirmation', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-confirmation', function (req, res) {		
		res.redirect('/' + version + '/signed-in/internal/document-exchange/file-share');
	});

	// Documents to Publish > Remove (Are you sure?)
	router.get('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-remove-confirm', function (req, res) {		
	
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/documents-to-publish-remove-confirm', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-remove-confirm', function (req, res) {		

		var removeConfirm = req.body.removeConfirm;
		
		if (removeConfirm == "Yes") {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-removed-confirmation');
		}
		else if (removeConfirm == "No") {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-publish?paginationRequired=true&page1=true');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-publish-remove-confirm?error=true');
		}
		
	});
	
	// Documents to Review
	router.get('/' + version + '/signed-in/internal/document-exchange/documents-to-review', function (req, res) {		
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/documents-to-review', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'error' : req.query.error,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'totalListCount' : 12,
			'clearLocalStorage' : true,
			'itemsPerPage' : 10,
			'itemTypeLabel' : "document",
			'itemTypeLabelPlural' : "documents"
		});
	});

	// Documents to Review > Remove (Are you sure?)
	router.get('/' + version + '/signed-in/internal/document-exchange/documents-to-review-remove-confirm', function (req, res) {		
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/documents-to-review-remove-confirm', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'error' : req.query.error
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/documents-to-review-remove-confirm', function (req, res) {		

		var removeConfirm = req.body.removeConfirm;
		
		if (removeConfirm == "Yes") {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-removed-confirmation');
		}
		else if (removeConfirm == "No") {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-review');
		}
		// Make sure the user chooses an option
		else {
			res.redirect('/' + version + '/signed-in/internal/document-exchange/documents-to-review-remove-confirm?error=true');
		}
		
	});

	// Documents Removed (Remove Confirmation)
	router.get('/' + version + '/signed-in/internal/document-exchange/documents-removed-confirmation', function (req, res) {		
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/documents-removed-confirmation', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams
		});
	});
	router.post('/' + version + '/signed-in/internal/document-exchange/documents-removed-confirmation', function (req, res) {		
		res.redirect('/' + version + '/signed-in/internal/document-exchange/file-share');
	});

	// Download Documents
	router.get('/' + version + '/signed-in/internal/document-exchange/download-documents', function (req, res) {		
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/internal/document-exchange/download-documents', {
			'version' : version,
			'versioning' : req.session.versioning,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'idams' : req.session.idams,
			'error' : req.query.error,
			'paginationRequired' : req.query.paginationRequired,
			'page1' : req.query.page1,
			'page2' : req.query.page2,
			'totalListCount' : 12,
			'clearLocalStorage' : true,
			'itemsPerPage' : 10,
			'itemTypeLabel' : "document",
			'itemTypeLabelPlural' : "documents"
		});
	});

	/**********
	* MYESF SERVICES PAGES
	* **********/

	/*** EXTERNAL USERS - CHILD VIEW (SCHOOL & SINGLE ACADEMY) ***/
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/document-exchange/child/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});

	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/document-exchange/child/my-roles-and-permissions', function (req, res) {
		
		req.session.idams = "adults";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});

	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/document-exchange/child/all-roles-and-permissions', function (req, res) {		
		
		req.session.idams = "adults";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	/*** EXTERNAL USERS - PARENT VIEW (LA & MAT) ***/
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/external/document-exchange/parent/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});

	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/external/document-exchange/parent/my-roles-and-permissions', function (req, res) {
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});

	// All user roles and permissions
	router.get('/' + version + '/signed-in/external/document-exchange/parent/all-roles-and-permissions', function (req, res) {		
		
		// Only set the session variable if it does not exist
		req.session.dashboard = req.session.dashboard || "No";
		req.session.idams = req.session.idams || "MAT";
		req.session.parent = req.session.parent || "MAT";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

	/*** INTERNAL USERS ***/
	// NOT SIGNED IN (PUBLIC)
	// User roles and permissions
	router.get('/' + version + '/signed-in/internal/document-exchange/roles-and-permissions', function (req, res) {		
		res.render(version + '/roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning
		});
	});

	// SIGNED IN
	// My user roles and permissions (Settings)
	router.get('/' + version + '/signed-in/internal/document-exchange/my-roles-and-permissions', function (req, res) {
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/my-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL,
			'hasValidRoles' : req.session.hasValidRoles
		});
	});

	// All user roles and permissions
	router.get('/' + version + '/signed-in/internal/document-exchange/all-roles-and-permissions', function (req, res) {		
		
		req.session.idams = "internal";
		
		res.render(version + '/signed-in/all-roles-and-permissions', {
			'version' : version,
			'versioning' : req.session.versioning,
			'idams' : req.session.idams,
			'myRolesAndPermissionsURL' : req.session.myRolesAndPermissionsURL,
			'signOutURL' : req.session.signOutURL
		});
	});

}
