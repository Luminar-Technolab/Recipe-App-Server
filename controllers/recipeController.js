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

exports.addRecipeController = async (req,res)=>{
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    try{
        const exisitingRecipe = await recipes.findOne({name})
        if(exisitingRecipe){
            res.status(406).json("Recipe already exist!!!")
        }else{
            const newRecipe = new recipes({
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.editRecipeController = async (req,res)=>{
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    const {id} = req.params
    try{
        
        const updatedRecipe = await recipes.findByIdAndUpdate({_id:id},{
            name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
        },{new:true})
        console.log(updatedRecipe);
        
        await updatedRecipe.save()
        res.status(200).json(updatedRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}


exports.deleteRecipeController = async (req,res)=>{
    const {id} = req.params
    try{
        const removedRecipe = await recipes.findByIdAndDelete({_id:id})
        res.status(200).json(removedRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}