const express = require ('express');
const router = express.Router();
const bcrypt=require('bcrypt')
var jwt=require('jsonwebtoken')
const User=require('../models/user');
const {validation,tokenGen} = require('../validation/user');

router.post('/add',(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
         throw err
        }else
        if(user){
            res.json({user:true,message:"user is exist"})
            console.log("user is exist")
        }
        else if(data=""){
res.json({data:false,message:"please fill all the fields"})
        }
        else{
         var data={name:req.body.name,
         email:req.body.email,
         password:req.body.password}
            const newUser=new User(data)
            bcrypt.genSalt(10,(err, salt) => 
                     bcrypt.hash(newUser.password, salt, (err, hash) =>{
                         if(err) throw err;
                         newUser.password = hash;
                         newUser.save()
                           .then((user) =>{
                              res.json({user:false,message:"user created"})
                           })
                           .catch(err => console.log(err));
                 }))
             }
           });
})

router.post('/login',async (req,res)=>{
    try{
        const userData=await User.findOne({email:req.body.email})
        if(!userData){
            res.json({userData:false,message:"user not exist pls sign in"})
        }else{
           await bcrypt.compare(req.body.password,userData.password,(err,result)=>{
               if(err)
               throw err
                if (!result){
                    res.json({isMatch:false,message:'password incorrect'})
                }
                else {
                    const token= tokenGen(userData.email)
                    res.header('auth',token).send(token)
                    // console.log(token)
                }
            })
            
        }
    }
    catch(error){
    res.send(error)
    }
})


   
router.get('/get',validation,(req,res)=>{
res.send('hello')
})

module.exports=router;