const form = document.querySelector("form");
const input = document.querySelector("#new-todo");
const searchInput = document.querySelector("#search-todo");
const list = document.querySelector("#todo-list");

// Create an empty array to store the todo items
let todos = [];

// Listen for form submission to add new todo item
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  if (!input.value) return; // if the input is empty, do nothing
  addTodoItem(input.value);
  input.value = ""; // clear the input field after adding a todo item
});
function addTodoItem(todoText) {
  const todo = {
    id: Date.now(), // create a unique id using the current date and time
    text: todoText,
    created_at: new Date(), // store the date and time the todo was created
  };
  todos.push(todo); // add the todo item to the todos array
  displayTodoItems(todos); // display the updated todos list
}

// Function to display the todo items
function displayTodoItems(todosToDisplay) {
  // Clear the current list of todos
  list.innerHTML = "";

  // Iterate over the todos array and create an HTML list item for each todo item
  todosToDisplay.forEach((todo) => {
    const li = document.createElement("li");
    const date = new Date(todo.created_at);
    const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    li.innerHTML = `
        <span>${todo.text}</span>
        <span class="created">${formattedDate}</span>
        <button class="delete" data-id="${todo.id}">Delete</button>
        <button class="edit" data-id="${todo.id}">Edit</button>
      `;
    list.appendChild(li);
  });
}
