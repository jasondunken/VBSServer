var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('\n\nGET request initiated from  ' + req.ip + '\n');
  res.status(200).render('healthcheck', { title: 'VBSurvey Server' });
});

module.exports = router;