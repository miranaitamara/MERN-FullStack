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

// Select positions for specific campaign
router.get('/:campaign_id', function(req, res, next) {
	req.app.locals.con.query(`SELECT * FROM position WHERE campaign_id = ${req.params.campaign_id};`, (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});



app.post
// Add new position for specific campaign
router.post('/POST', function(req, res, next) {
	const position = req.body;
	const name = position.name;
	const start_date = position.start_date;
	const end_date = position.end_date;
	const openings = position.openings;
	const description = position.description;
	const campaign_id = position.campaign_id;
	req.app.locals.con.query(
		`INSERT INTO position VALUES(
			'${ name }', NOW(),
			'${ end_date }',
			${ openings },
			TRUE,
			NULL,
			${ campaign_id },
			'${ description }');`,
		(err, results, fields) => {
			if (err) {
				console.log(err);
			}
	});
});

module.exports = router;