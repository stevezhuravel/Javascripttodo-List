var todos = ["Buy New Tutle"];
var input = prompt("What would you like to do");
while(input !== "quit"){

// handle input
if(input === "list"){
    console.log(todos);
}else if(input === "new"){
    // ask for new todo list
    var askNewTodo = prompt("Enter tnew todo");
    // add to lst
    todos.push(askNewTodo);
}
// ask input again
input = prompt("What would you like to do");
} 
console.log("Ok, you quit the app")