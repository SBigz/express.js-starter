var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Sign In
router.post('/signin', function(req, res, next) {
  res.send('respond with a resource');
});

// Sign Up
router.post('/signup', function(req, res, next) {
  res.send('respond with a resource');
});

// Sign Out
router.post('/signout', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
