var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('users', { title: 'Users View', message: 'You are in the user view :D' });


  // res.send('respond with a resource');

  res.render('list', {title: 'Users'});
});



// router.get('/permissions', function(req, res, next){
//   res.render('permissions', {title: 'permissions'});
// });

router.get('/json-list', async function(req, res, next){
  const users = require('../services/users');

  /* GET leguages listing. */
  
    try{
      res.json(await users.getUser(req.query.page));
    }
    catch(err){
      console.error('Error' + err.message);
      next(err);
    }
});

module.exports = router;
