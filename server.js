const mysql = require('mysql');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Routes
const applicants = require('./routes/applicants');

// Connect to MySQL
app.locals.con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "gummiworm0",
		database: "here"
	});

app.locals.con.connect(err => {
	if(err) throw err;
	console.log("Connected to MySQL");
});


app.use('/api/v1/applicants/', applicants);

app.listen(port, () => console.log(`Listening on port ${port}`));

// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "Lollipop0+",
// 	database: "here"
// });

// con.connect(err => {
// 	if(err) {
// 		console.log(err);
// 	}
// 	console.log("Connected!");
// 	con.query(sql, (err, result) => {
//     if (err) throw err;
//     result.forEach(applicant => {
// 		console.log(applicant.id + " " + applicant.name);
//     });
//   });
// });