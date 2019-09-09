var express = require('express');
var router = express.Router();
var db = require('../db.js');
var dbPattern = require('../dbPattern.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  if(req.body.type==='duplication'){
    const reqId = req.body.id;
    const selectReqId = db.get('member').find({id : reqId}).value();
    const result = !!selectReqId
    res.send({result : result});
  }else if(req.body.type==='signUp'){
    const data = req.body.data;
    db.get('member')
    // 0 : id, 1 : pwd, 3 : name, 4 : birthYear, 5 : birthMonth, 6 : birthDate, 7 : gender, 8 : email, 9 : phone, 11 : interest array
      .push(dbPattern.member(data[0], data[1], data[3], data[4]+data[5]+data[6], data[7], data[8], data[9], JSON.parse(data[11])))
      .write();
    res.send({result : 'success'});
  }
});

module.exports = router;
 