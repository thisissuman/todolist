import { useState } from "react";

const Mytodoform = ({ addtask }) => {
  const [newtask, setnewtask] = useState("");

  const submithandeler = (e) => {
    e.preventDefault();
    setnewtask("");
    addtask(newtask);
  };
  return (
    <form action="submit" onSubmit={submithandeler}>
      <input
        type="text"
        onChange={(e) => setnewtask(e.target.value)}
        value={newtask}
      />
      <button htmlFor="">Add Task</button>
    </form>
  );
};

export default Mytodoform;
