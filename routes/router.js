const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonialController = require('../controllers/testimonialController')
const userController = require('../controllers/userController')

const router = new express.Router()

//get-all-recipes 
router.get("/get-all-recipes",recipeController.getAllRecipes)
//add client message
router.post("/add-testimony",testimonialController.addTestimonialController)
//add user
router.post("/register",userController.addUserController)
//login
router.post("/login",userController.loginController)
//get single recipe
router.get("/recipes/:id/view",recipeController.getARecipe)
//get-related-recipies
router.get("/get-related-recipes",recipeController.getAllRelatedRecipes)
//get client testimony
router.get("/get-all-testimony",testimonialController.getAllTestimony)


module.exports = router