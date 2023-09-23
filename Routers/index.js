const express=require('express');
const router=express.Router();
const home_controller=require('../Controllers/home_cont');
console.log("router running");
/*router.get('/',(req,res)=>{
    res.send("helo");
});*/
router.get('/',home_controller.home);
router.use('/newproject',require('./create_project'));
router.use('/details',require('./details_route'));

module.exports=router;