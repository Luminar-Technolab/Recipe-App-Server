const express = require('express')
const recipeController = require('../controllers/recipeController')

const router = new express.Router()

//get-all-recipes 
router.get("/get-all-recipes",recipeController.getAllRecipes)

module.exports = router