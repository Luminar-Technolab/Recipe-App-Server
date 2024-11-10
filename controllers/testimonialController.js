const testimonials = require('../models/testmonialModel')

//add testimonials

exports.addTestimonialController = async (req,res)=>{
    console.log("Inside addTestimonialController");
    const {name,email,message} = req.body
    try{
        const newMessage = new testimonials({
            name,email,message
        })
        await newMessage.save()
        res.status(200).json(newMessage)
    }catch(err){
        res.status(401).json(err)
    }
    
}

exports.getAllTestimony = async (req,res)=>{
    try{
        const allTestimony = await testimonials.find()
        res.status(200).json(allTestimony)
    }catch(err){
        res.status(401).json(err)
    }
}