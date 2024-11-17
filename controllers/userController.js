const users =  require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//add user
exports.addUserController = async (req,res)=>{
    console.log("Inside addUserController");
    const {username,email,password} = req.body
    try{
        const exisitingUser = await users.findOne({email})
        if(exisitingUser){
            res.status(406).json("Account Already Exists... Please login!!!")
        }else{
            const newPassword = await bcrypt.hash(password,13)
            const newUser = new users({
                username,email,password:newPassword
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

//login user
exports.loginController = async (req,res)=>{
    console.log("Insdie loginController");
    const {email,password} = req.body
    try{
        const exisitingUser = await users.findOne({email})
        if(exisitingUser){
            let isMatch = bcrypt.compare(password,exisitingUser.password)
            if( exisitingUser.password == password || isMatch){
                const token = jwt.sign({userId:exisitingUser._id},"supersecretkey12345")
                res.status(200).json({
                    user:exisitingUser,token
                })
            }else{
                res.status(404).json("Invalid Password")
            }
        }else{
            res.status(404).json("Invalid Email")
        }
    }catch(err){
        res.status(401).json(err)
    }
}