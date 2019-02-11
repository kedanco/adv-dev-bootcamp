$(document).ready(function() {
	$.getJSON("/api/todos").then(addTodos);

	$("#todoInput").keypress(function(event) {
		if (event.which == 13) {
			createTodo();
		}
	});

	$(".list").on("click", "li", function() {
		updateTodo($(this));
	});

	//adding to list (exists when page load), but listening for clicks on spans.
	$(".list").on("click", "span", function(event) {
		event.stopPropagation();
		removeTodo($(this).parent());
	});
});

function addTodos(todos) {
	//add todos to page here
	todos.forEach(function(todo) {
		addTodo(todo);
	});
}

function addTodo(todo) {
	let newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
	newTodo.data("id", todo._id);
	newTodo.data("completed", todo.completed);
	if (todo.completed) {
		newTodo.addClass("done");
	}
	$(".list").append(newTodo);
}

function createTodo() {
	//send req to create new todo
	let userInput = $("#todoInput").val();
	$.post("/api/todos", { name: userInput })
		.then(function(newTodo) {
			$("#todoInput").val("");
			addTodo(newTodo);
		})
		.catch(function(err) {
			console.log(err);
		});
}

function removeTodo(todo) {
	let clickedID = todo.data("id");

	console.log(clickedID);

	$.ajax({
		method: "DELETE",
		url: `/api/todos/${clickedID}`,
		crossDomain: true
		// contentType: "application/x-www-form-urlencoded",
		// headers: {
		// 	accept: "application/json",
		// 	"Access-Control-Allow-Origin": "*",
		// 	"Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, DELETE, OPTIONS"
		// }
	}).then(function(data) {
		todo.remove();
		console.log(data);
	});
}

function updateTodo(todo) {
	let updateID = todo.data("id");
	let isDone = !todo.data("completed");
	let updateData = { completed: isDone };
	$.ajax({
		method: "PUT",
		url: `/api/todos/${updateID}`,
		data: updateData
	}).then(function(updatedTodo) {
		todo.toggleClass("done");
		todo.data(isDone);
	});
}
