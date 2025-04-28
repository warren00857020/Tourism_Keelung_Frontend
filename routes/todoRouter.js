const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todosController')

//Get All
router.get('/',todoController.getAllTodos)

//Create Todo
router.post('/',todoController.createTodos)

module.exports = router;