const todoModel = require('../models/todosModel');

exports.getAllTodos = (req, res)=>{
    const todos = todoModel.getAll();
    res.send({
        status: 'success',
        todos,
    })
};

exports.createTodos = (req, res)=>{
    //取得用戶所輸入的資料
    const {title} = req.body;

    const newTodo = todoModel.create({
        title
    })

    res.send({
        status: 'success',
        todo: newTodo
    })
};