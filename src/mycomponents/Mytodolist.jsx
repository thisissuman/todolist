import React from "react";

const Mytodolist = ({ todo, deletetask, editTask, toogleHandeler }) => {
  if (todo.task.length == 0) return;
  return (
    <div key={todo.id} style={{ display: "flex", gap: "100px" }}>
      <p
        style={{ background: todo.isCompleted && "green" }}
        onClick={() => toogleHandeler(todo.id)}
      >
        {todo.task}
      </p>
      <button onClick={() => deletetask(todo.id)}>Delete</button>
      <button onClick={() => editTask(todo.task, todo.id)}>Edit</button>
    </div>
  );
};

export default Mytodolist;
