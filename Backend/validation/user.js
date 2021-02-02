const jwt = require('jsonwebtoken');

const tokenGen=(email)=>{
    const token =jwt.sign({email},process.env.JWT_KEY, { expiresIn: '1h' })
    return token
}
 var validation=async (req,res,next) =>{
    const token=req.header("auth");
    console.log(token)
     if(!token){
        return res.status(401).send('Access denied');
      }
       
    try{
        const verified = jwt.verify(token,process.env.JWT_KEY);
        req.user = verified;
        next();
    }catch (err) {
        console.log(err,"errrr")
        res.status(400).send('Wrong token');
    }
};

module.exports.validation=validation;
module.exports.tokenGen=tokenGen;