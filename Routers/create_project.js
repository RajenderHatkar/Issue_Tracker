const express=require('express');
const router=express.Router();
const create_project_controller=require('../Controllers/create_project_controller');
console.log("router running");
/*router.get('/',(req,res)=>{
    res.send("helo");
});*/
router.get('/',create_project_controller.home);
router.post('/create',create_project_controller.create);

module.exports=router;