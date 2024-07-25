import React from "react";
import { useState } from "react";
const MyEditlist = ({ todo, editTask }) => {
  const [value, setvalue] = useState(todo.task);
  const handelrsubmnuit = (e) => {
    e.preventDefault()
    editTask(value, todo.id)
  }
  return (
    <form action="submit" onSubmit= {handelrsubmnuit}>
      <input
        type="text"
        onChange={(e) => setvalue(e.target.value)}
        value={value}
      />
      <button htmlFor="">Add Task</button>
    </form>
  );
};

export default MyEditlist;
