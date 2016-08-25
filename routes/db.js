var express = require('express');
var router = express.Router();

//router.get('/', function(req, res, next) {
 //   res.send('database updated');
//});


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'railway'
});
connection.connect();

connection.query('SELECT * from users', function(err, rows, fields) {
    if (!err){
        router.get('/', function(req, res, next) {
            res.render('db', { Name: rows[0]["UserId"] });
            //res.send('The solution is: ', rows[0]["NAME"]);
        });

    }
    else
        console.log('Error while performing Query.');
});

connection.end();
module.exports = router;