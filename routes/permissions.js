var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
// //   res.render('users', { title: 'Users View', message: 'You are in the user view :D' });
//   res.send('permissions', 'respond with a resource, you are in Permissions!');
//   // res.render('permissions', {title: 'Users'});
// });

router.get('/', function(req, res, next) {
  res.render('permissions', {title: 'Permissions'});
});

module.exports = router;