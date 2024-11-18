const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonialController = require('../controllers/testimonialController')
const userController = require('../controllers/userController')
const savedRecipeController = require('../controllers/savedRecipeController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadController = require('../controllers/downloadController')

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
//add saved recipe
router.post("/add-saved-recipe",jwtMiddleware,savedRecipeController.addTosaveRecipeController)
//get all saved recipe
router.get("/all-saved-recipe",jwtMiddleware,savedRecipeController.getAllSavedRecipes)
//remove  saved recipe
router.delete("/:id/remove-saved-recipe",jwtMiddleware,savedRecipeController.removeSavedRecipe)
//add download recipe
router.get("/download-recipe/:id/add",jwtMiddleware,downloadController.addDownloadRecipe)
//get-all-users 
router.get("/get-all-users",jwtMiddleware,userController.getAllUsers)
//get all downloads
router.get("/get-all-downloads",downloadController.getAllData)


module.exports = router