var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('search', { title: 'Railway Management' });
//res.render('header', { title: 'Railway Management' });
});
module.exports = router;
