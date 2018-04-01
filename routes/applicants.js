var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/GET', function(req, res, next) {
	req.app.locals.con.query('SELECT * FROM applicant', (err, results, fields) => {
		if (err) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.post('/POST', function(req, res, next) {
	var applicant = req.body;
	var first_name = applicant.first_name;
	var last_name = applicant.last_name;
	var school = applicant.school;
	req.app.locals.con.query(
		"INSERT INTO applicant VALUES(NULL, '" + first_name + "', '"+ last_name + "', '" + school + "', NOW());", (err, results, fields) => {
		if (err) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": "Success!"}));
	});
});

module.exports = router;