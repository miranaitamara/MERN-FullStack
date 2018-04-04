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
	req.app.locals.con.query('SELECT * FROM campaign', (err, results, fields) => {
		if (err) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

router.post('/POST', function(req, res, next) {
	var campaign = req.body;
	req.app.locals.con.query(
		`INSERT INTO campaign VALUES('${ campaign.name }', NULL);`, (err, results, fields) => {
		if (err) throw err;
		res.send(JSON.stringify({"status": 200}));
	});
});

module.exports = router;