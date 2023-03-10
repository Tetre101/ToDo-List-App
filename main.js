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
