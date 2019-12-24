var todo = ["Buy some fruits."];

var input = prompt("Please input a command for todo list.");

while (input !== "quit") {
  if (input === "list") {
    toDoList()
  } else if (input === "new") {
      var newTodo = prompt("Please input new todo.");
      todo.push(newTodo);
  } else if (input === "delete") {
      var index = prompt("Please input the numeber of removding todo.");
      todo.splice(index,1);
      console.log("Item has been removed.");
  }

  input = prompt("Please input a command for todo list.");
}
console.log("You quit the app.");

function toDoList() {
  console.log("****************");
  todo.forEach(function(item, i) {
    console.log(i + ":" + " " + item);
  });
  console.log("****************");
};