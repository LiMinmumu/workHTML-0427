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

router.get("/login",function(req,res,next){
    res.render("login");
});
router.get("/applyNewContacter",function(req,res,next){
    res.render("applyNewContacter");
});
router.get("/statusSuccess",function(req,res,next){
    res.render("statusSuccess");
});
router.get("/checkPass",function(req,res,next){
    res.render("checkPass");
});
router.get("/statusReadyContacter",function(req,res,next){
    res.render("statusReadyContacter");
});
router.get("/statusWaiting",function(req,res,next){
    res.render("statusWaiting");
});
router.get("/statusError",function(req,res,next){
    res.render("statusError");
});
router.get("/contacterAgreement",function(req,res,next){
    res.render("contacterAgreement");
});
module.exports = router;
