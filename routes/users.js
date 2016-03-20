var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs411a2');

var Schema = mongoose.Schema;
var person = new Schema({
  name: String,
  UID: String,
  department: String
});
var people = mongoose.model('people', person);

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('use /users/db');
});

router.post('/db', function(req, res, next) {

  var person = new people(req.body);
  person.save(function (err) {
    if (err) { console.log('error!');}
    else {
      res.json({message: 'all is well'});
    }
  });


});

router.get('/db', function(req, res, next) {

  people.find({}, function (err, results) {
    res.json(results);

  });

});

router.get('/db/:name', function(req, res, next) {

  people.find({name: req.params.name}, function (err, results) {
    res.json(results);

  });

});


module.exports = router;
