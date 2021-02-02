const express = require ('express');
const router = express.Router();
const {validation}=require('../validation/user')


router.get('/home',validation,(req,res)=>{
    res.send('hello')
})


module.exports=router;