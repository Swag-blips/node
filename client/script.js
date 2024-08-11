"use strict";

let apiUrl = "http://localhost:3000/todos";
let todoInput = document.querySelector(".todo-box");
let addButton = document.getElementById("add-task");
let todoContainer = document.getElementById;
document.addEventListener("DOMContentLoaded", () => {
  const getTodo = async () => {
    let response = await fetch(apiUrl);
    let data = await response.json();

    console.log(data);
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
