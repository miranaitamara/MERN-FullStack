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

router.get('/GET', function(req, res, next) {
	req.app.locals.con.query('SELECT * FROM applicant', (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.post('/POST', function(req, res, next) {
	var applicant = req.body;
	var first_name = applicant.first_name;
	var last_name = applicant.last_name;
	var school = applicant.school;
	req.app.locals.con.query(
		`INSERT INTO applicant VALUES(NULL, '${ first_name }', '${ last_name }', '${ school }', NOW());`, (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "redirect": results}));
	});
});

router.get('/:position_id', function(req, res, next) {
	console.log(req.params.position_id);
	req.app.locals.con.query(`SELECT * FROM applicant WHERE EXISTS (SELECT * FROM application WHERE applicant.applicant_id = application.applicant_id AND application.position_id = ${ req.params.position_id });`, (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

module.exports = router;