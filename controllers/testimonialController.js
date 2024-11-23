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

exports.updateTestimonialController = async (req,res)=>{
    console.log("Inside updateTestimonialController");
    const status = req.query.status
    const {id} = req.params
    try{
        const existingRqst = await testimonials.findById({_id:id})
        existingRqst.status = status
        await existingRqst.save()
        res.status(200).json(existingRqst)
    }catch(err){
        res.status(401).json(err)
    }
    
}
