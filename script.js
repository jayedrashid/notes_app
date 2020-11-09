// Select The Element 
const dateElement = document.getElementById("date");

// Show Today's Date
const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event){
    // Prevent Form from submitting
event.preventDefault();
    // Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
    // Create Li 
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
    // Check Mark Button 
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
    // Check Trash Button 
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
    // Append To List (Connect the total div elements to original html list)
todoList.appendChild(todoDiv);
    // CLEAR Todo Input Value 
todoInput.value = "";
}

function deleteCheck(e) {
const item = e.target;
    // DELETE Todo
if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation of Falling
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function() {
        todo.remove();
    } );
}
    // COMPLETE Check Todo
if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}