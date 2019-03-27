const dataHandler = require("../../models/db/DB_Course");
var express = require('express');
var router = express.Router();

router.post('/get_Name_ID', function(req, res) {
    console.log(req.body);
    var AcademicDegree = req.body.AcademicDegree;
    dataHandler.get_Name_ID(AcademicDegree, function(err, apiResult){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.send(JSON.stringify(apiResult));
        }
    })
  });

  module.exports = router;