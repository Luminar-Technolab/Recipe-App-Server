const downloads = require('../models/downloadRecipeModel')

//add recipe download
exports.addDownloadRecipe = async (req,res)=>{
    const userId = req.userId
    const {id} = req.params
    try{
        const existingRecipe  = await downloads.findOne({recipeId:id})
        if(existingRecipe){
            existingRecipe.count +=1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }else{
            const newRecipe = new downloads({
                recipeId:id,count:1,timeStamp:Date.now(),userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}