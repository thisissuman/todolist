import React, { useState } from "react";
import { TodoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditedList";
import { TodoList } from "./ToDoList";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "", completed: false, isEditing: false },
  ]);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (newtask, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newtask, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <TodoList
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
