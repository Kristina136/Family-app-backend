const { Router} =require("express");
const { getRecipe, saveRecipe, deleteRecipe, editRecipe } = require("./AppController");
const router= Router();
router.get('/', getRecipe)
router.post('/saveRecipe', saveRecipe)
router.post('/deleteRecipe', deleteRecipe)
router.put('/editRecipe', editRecipe)


module.exports = router
