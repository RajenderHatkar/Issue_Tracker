const express=require('express');
const router=express.Router();
const details_controller=require('../Controllers/details_controller');

router.get('/:id',details_controller.home);
router.get('/Issue/:id',details_controller.issuepage);
router.post('/create-issue/:id', details_controller.create);
console.log('details router connected');

module.exports=router;