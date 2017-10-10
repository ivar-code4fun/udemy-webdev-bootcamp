var todos = ["Buy a new turtle"];

var response = prompt("What would you like to do?");

while (response !== "quit")
{
	if (response === "new")
	{
		addTodos();
	}
	else if (response === "list")
	{
		listTodos();
	}
	else if (response === "delete")
	{
		deleteTodos();
	}

	response = prompt("What would you like to do?");
}
console.log("Ok, you quit the app!");

function listTodos() 
{
	console.log("******************")
	todos.forEach(function(todo, index) {
		console.log(index + ": " + todo);
	});
	console.log("******************")
}

function addTodos() {
	var item = prompt("Enter a new todo");
	todos.push(item);
	console.log("Added a todo");
}

function deleteTodos() {
	var index = prompt("Enter the index of item to delete");
	todos.splice(index,1);
	console.log("Deleted todo");
}