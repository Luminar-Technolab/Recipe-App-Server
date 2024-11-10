const recipes = require("../models/recipeModel")

//get all recipes
exports.getAllRecipes = async (req,res)=>{
    console.log("Inside getAllRecipes");
   
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        res.status(401).json(err)
    }
}

//view recipe
exports.getARecipe = async (req,res)=>{
    console.log("Inside getARecipe");
    const {id} = req.params
    try{
        const viewRecipe = await recipes.findById({_id:id})
        res.status(200).json(viewRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAllRelatedRecipes = async (req,res)=>{
    const serachCuisine = req.query.cuisine
    console.log(serachCuisine);
    
    const query = {
        cuisine : {
            $regex:serachCuisine,$options:"i"
        }
    }
    console.log(query);
    
    try{
        const allRelatedRecipes = await recipes.find(query)
        res.status(200).json(allRelatedRecipes)
    }catch(err){
        res.status(401).json(err)
    }
}