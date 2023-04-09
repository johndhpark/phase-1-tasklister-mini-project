document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const input = form.elements["new-task-description"];
  const todos = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = input.value;
    const newTodo = document.createElement("li");
    newTodo.textContent = task;

    todos.append(newTodo);

    input.value = "";
  });
});
