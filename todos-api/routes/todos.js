let express = require("express");
let router = express.Router();
let helpers = require("../helpers/todos");

router
	.route("/")
	.get(helpers.getTodos)
	.post(helpers.createTodos);

router
	.route("/:todoId")
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.put(helpers.deleteTodo);

module.exports = router;
