"use strict";

let apiUrl = "http://localhost:3000/todos";
let todoInput = document.querySelector(".todo-box");
let addButton = document.getElementById("add-task");
let todoContainer = document.getElementById("todo-list");
document.addEventListener("DOMContentLoaded", () => {
  const getTodo = async () => {
    todoContainer.innerHTML = "";
    let response = await fetch(apiUrl);
    let data = await response.json();

    data.forEach((data) => {
      console.log(data);

      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = "Delete";

      button.addEventListener("click", () => {
        const deleteTodo = async (id) => {
          fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

          getTodo();
        };

        deleteTodo(data.id);
      });

      li.innerHTML = data.todo;

      todoContainer.appendChild(li);
      li.appendChild(button);
    });
  };
  getTodo();

  const addTodo = () => {
    let todoValue = todoInput.value;

    if (todoValue !== "") {
      const newTodo = {
        todo: todoValue,
      };

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

      getTodo();
    }
  };

  addButton.addEventListener("click", addTodo);
});
