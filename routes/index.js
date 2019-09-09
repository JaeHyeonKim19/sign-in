var express = require('express');
var router = express.Router();
var db = require('../db.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  const reqId = req.body.id;
  const selectReqId = db.get('member').find({id : reqId}).value();
  const result = !!selectReqId
  res.send({result : result});
});

module.exports = router;
 