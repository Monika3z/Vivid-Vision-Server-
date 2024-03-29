const users = require('../Models/userModel') 
const jwt = require('jsonwebtoken')


// Register
exports.register = async (req,res)=>{
    console.log("Inside Register Api");
    const {username,email,password} = req.body
    console.log(username,email,password); 
    try{
         const existingUser = await users.findOne({email})  
         console.log(existingUser);
         if(existingUser){ 
            res.status(406).json("account already exists please login!!") 
         }else{
            // add user to collection
            const newUser = new users({
                username,email,password
            })
            await newUser.save() 
            res.status(200).json(newUser)    
         }
    }catch(err){
        res.status(401).json(err) 
    }
}

// -----------------------------------------------

// Login 
exports.login = async (req,res)=>{
    console.log("Inside Login Api");
    const {email,password} = req.body
    console.log(email,password); 
    try{
         const existingUser = await users.findOne({email,password})  
         console.log(existingUser);
         if(existingUser){
            // exist user allow login
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_KEY) 
            res.status(200).json({existingUser,token})
        }else{
            res.status(404).json("Invalid Email / Password!") 
        }
    }catch(err){
        res.status(401).json(err) 
    }
}