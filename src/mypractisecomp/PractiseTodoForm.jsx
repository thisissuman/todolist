import React, { useState } from "react";

const PractiseTodoForm = ({ getData }) => {
  const [change, setChange] = useState("");
  const submithandeler = (e) => {
    e.preventDefault();
    getData(change);
  };
  return (
    <div>
      <form onSubmit={submithandeler}>
        <input
          type="text"
          onChange={(e) => setChange(e.target.value)}
          value={change}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default PractiseTodoForm;
