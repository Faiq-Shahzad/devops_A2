var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function (req, res, next) {
  console.log("GOt / reqeust");
  var sqlQuery = `SELECT * FROM users`;
  try{
    db.query(sqlQuery, function (err, results, fields) {
  
      res.render('index', {
        title: 'Register - Login',
        authorised: req.session.authorised,
        fname: req.session.fname,
        users: results
      });

      console.log("Results", results);
      console.log("err", err);
      console.log("fields", fields);
  
    });

  }catch(error){
    console.log("ERROR", error);
  }

});

module.exports = router;