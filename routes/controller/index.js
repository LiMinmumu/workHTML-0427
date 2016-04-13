var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/detail",function(req,res,next){
  res.render("detail",{title:"Detail"});
});

router.post("/list",function(req,res,next){
  res.json({ user: 'tobi' }).end();
});
router.get("/minmin",function(req,res,next){
    res.sendFile("abc.txt",{"root":"../views"});
});
router.get("/min_login",function (req,res,next) {
    res.render("min_login");
})
module.exports = router;
