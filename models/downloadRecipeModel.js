const mongoose = require('mongoose')

const downloadRecipeSchema = new mongoose.Schema({
    recipeId:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    timeStamp:{
        type:Date,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const downloads = mongoose.model("downloads",downloadRecipeSchema)
module.exports = downloads