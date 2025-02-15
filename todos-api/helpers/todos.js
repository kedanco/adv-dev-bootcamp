let db = require("../models");

exports.getTodos = function(req, res) {
	db.Todo.find()
		.then(todos => {
			res.json(todos);
		})
		.catch(err => {
			res.send(err);
		});
};

exports.createTodos = function(req, res) {
	db.Todo.create(req.body)
		.then(function(newTodo) {
			res.status(201).json(newTodo);
		})
		.catch(err => {
			res.send(err);
		});
};

exports.getTodo = function(req, res) {
	db.Todo.findById(req.params.todoId)
		.then(function(foundTodo) {
			res.json(foundTodo);
		})
		.catch(function(err) {
			res.send(err);
		});
};

exports.updateTodo = function(req, res) {
	db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true }) //instead of sending old v, will send updated object.
		.then(function(todo) {
			res.json(todo);
		})
		.catch(function(err) {
			res.send(err);
		});
};

exports.deleteTodo = function(req, res) {
	db.Todo.remove({ _id: req.params.todoId })
		.then(function() {
			res.json({ message: "We deleted it!" });
		})
		.catch(function(err) {
			res.send(err);
		});
};
