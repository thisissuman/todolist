import React from "react";

const PractiseTodoList = ({ todo, deletelist, togglehandeler }) => {
  return (
    <div>
      <div
        onClick={(e) => togglehandeler(todo.id, todo)}
        style={{ background: todo.isCompleted ? "red" : "" }}
      >
        {todo.task}
      </div>
      <button onClick={(e) => deletelist(todo.id)}>Delete</button>
    </div>
  );
};

export default PractiseTodoList;
