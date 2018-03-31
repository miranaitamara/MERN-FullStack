var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	req.app.locals.con.query('SELECT * FROM applicant', (err, results, fields) => {
		if (err) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

module.exports = router;