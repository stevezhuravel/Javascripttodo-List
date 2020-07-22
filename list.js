var todos = ["Buy New Tutle"];

var input = prompt("What would you like to do");

while(input !== "quit"){
// handle input
if(input === "list"){
listTodos();
}else if(input === "new"){
addTodo();
} else if(input === "delete"){
deleteTodo();
}
// 
// ask input again
// prompts the user what you like to do next
input = prompt("What would you like to do");
} 
// logs to the console that you quit the app
console.log("Ok, you quit the app");
function listTodos(){
    console.log("******************")
    todos.forEach(function(todos , i){
        console.log(i + ": " + todos);
    });
    console.log("******************")
}
function addTodo(){
    // ask for new todo list
    // ask the user to enter new todo list
    var askNewTodo = prompt("Enter new todo");
    // add to lst
    todos.push(askNewTodo);
    console.log("Added todo");
}
function deleteTodo(){
    // ask of index to be deleted 
var index = prompt("Enter index of todo to delete")
//  delete that todo
// splice()
// splice makes a cut
// the first item is where we want to make the cut 
// the second item is how many items we want to delete
todos.splice(index, 1)
console.log("Deleted todo")
}