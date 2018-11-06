var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
	res.render('index');
});

/**********
 * SCREEN FLOWS
 * **********/

// Beta
// beta-v11.0.0
router.get('/beta/v11.0.0/site-map', function (req, res) {
	res.render('beta/v11.0.0/site-map');
});
// beta-v10.0.0
router.get('/beta/v10.0.0/site-map', function (req, res) {
	res.render('beta/v10.0.0/site-map');
});

/**********
 * ARCHIVED USER JOURNEYS
 * **********/

// Archive home page
router.get('/archive', function (req, res) {
	res.render('archive');
});
// Beta
router.get('/archive/beta/sprint-10', function (req, res) {
	res.render('archive/beta/sprint-10');
});
router.get('/archive/beta/sprint-9', function (req, res) {
	res.render('archive/beta/sprint-9');
});
router.get('/archive/beta/sprint-8', function (req, res) {
	res.render('archive/beta/sprint-8');
});
router.get('/archive/beta/sprint-7', function (req, res) {
	res.render('archive/beta/sprint-7');
});
router.get('/archive/beta/sprint-6', function (req, res) {
	res.render('archive/beta/sprint-6');
});
router.get('/archive/beta/sprint-5', function (req, res) {
	res.render('archive/beta/sprint-5');
});
router.get('/archive/beta/sprint-4', function (req, res) {
	res.render('archive/beta/sprint-4');
});
router.get('/archive/beta/sprint-3', function (req, res) {
	res.render('archive/beta/sprint-3');
});
router.get('/archive/beta/sprint-2', function (req, res) {
	res.render('archive/beta/sprint-2');
});
router.get('/archive/beta/sprint-1', function (req, res) {
	res.render('archive/beta/sprint-1');
});
// Alpha
router.get('/archive/alpha/sprint-4', function (req, res) {
	res.render('archive/alpha/sprint-4');
});
router.get('/archive/alpha/sprint-3', function (req, res) {
	res.render('archive/alpha/sprint-3');
});
router.get('/archive/alpha/sprint-2', function (req, res) {
	res.render('archive/alpha/sprint-2');
});
router.get('/archive/alpha/sprint-1', function (req, res) {
	res.render('archive/alpha/sprint-1');
});

/**********
 * CHILD ROUTE FILES
 * **********/

// Beta
// beta-v11.0.0
require('./routes/beta/v11.0.0/global.js')(router);
require('./routes/beta/v11.0.0/document-exchange.js')(router);
// beta-v10.0.0
require('./routes/beta/v10.0.0/global.js')(router);
require('./routes/beta/v10.0.0/document-exchange.js')(router);

module.exports = router;
