const savedRecipes = require('../models/savedRecipeModel')

//save recipe
exports.addTosaveRecipeController = async (req,res)=>{
    const {id,name,cuisine,image} = req.body
    const userId = req.userId
    try{
        const exisitingRecipe = await savedRecipes.findOne({recipeId:id,userId})
        if(exisitingRecipe){
            res.status(406).json("Selected Recipe already in your list... Please add another!!!")
        }else{
            const newRecipe = new savedRecipes({
                recipeId:id,name,cuisine,image,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAllSavedRecipes = async (req,res)=>{
    const userId = req.userId
    try{
        const allSavedRecipes = await savedRecipes.find({userId})
        res.status(200).json(allSavedRecipes)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.removeSavedRecipe = async (req,res)=>{
    const {id} = req.params
    try{
        const removedItem = await savedRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(removedItem)
    }catch(err){
        res.status(401).json(err)
    }
}