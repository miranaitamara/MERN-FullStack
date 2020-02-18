const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Routes
const secreq = require('./routes/secreq');
//const campaigns = require('./routes/campaigns');
//const positions = require('./routes/positions');
//const applicants = require('./routes/applicants');

// Connect to MySQL
app.locals.con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "redalertlabs"
	});

app.locals.con.connect(err => {
	if(err) throw err;
	console.log("Connected to MySQL");
});

// Console.log req info
app.use(function(req,res,next) {
	console.log(`${ req.method } request for '${ req.url }'`);
	next();
});

app.use('/api/v1/secreq/', secreq);

//app.use('/api/v1/campaigns/', campaigns);
//app.use('/api/v1/positions/', positions);
//app.use('/api/v1/applicants/', applicants);


app.listen(port, () => console.log(`Listening on port ${port}`));



// Production

// app.use(express.static(path.join(__dirname, './client/build')));

// app.get('/', (req, res) => res.render('index'));
