const express = require("express");

const cors = require("cors");
const port = 3000;
const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOptions));

let todos = [];
app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  let newTodos = {
    id: todos.length + 1,
    todo: req.body.todo,
    completed: false,
  };

  todos.push(newTodos);
  res.status(201).json(todos);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(201).json(todos);
});
