var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Console.log req info
router.use(function(req,res,next) {
	console.log(`Request body: ${ JSON.stringify(req.body)}'`);
	next();
});

// Select all keymeasures
router.get('/GET', function(req, res, next) {
	req.app.locals.con.query('SELECT * FROM securityrequirement', (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


// Select all Threats (processed transaction)
router.get('/GET', function(req, res, next) {
	req.app.locals.con.query('SELECT THREAT_DESCP FROM threat WHERE (threat.THREAT_TYPE = Processed) AND (threat.THREAT_CATEG = Transaction)  ', (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

// Select all Threats (processed security)
router.get('/GET', function(req, res, next) {
	req.app.locals.con.query('SELECT THREAT_DESCP FROM threat WHERE (threat.THREAT_TYPE = Processed) AND (threat.THREAT_CATEG = Security)  ', (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

// Select all Threats (processed configuration)
router.get('/GET', function(req, res, next) {
	req.app.locals.con.query('SELECT THREAT_DESCP FROM threat WHERE (threat.THREAT_TYPE = Processed) AND (threat.THREAT_CATEG = Configuration)  ', (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


// Post Keymeasure
/*router.post('/POST', function(req, res, next) {
	var keymeasure = req.body;
	req.app.locals.con.query(
		`INSERT INTO keymeasure VALUES('${ keymeasure.name }', NULL);`, (err, results, fields) => {
		if(err) {
			console.log(err);
		}
	});
});*/

module.exports = router;