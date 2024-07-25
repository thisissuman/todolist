import { useState } from "react";
import Mytodoform from "./Mytodoform";
import Mytodolist from "./Mytodolist";
import { v4 as uuidv4 } from "uuid";
import MyEditlist from "./MyEditlist";

const Mytodowrapper = () => {
  const [todos, setTodods] = useState([
    { id: uuidv4(), task: "", isCompleted: false, isEdited: false },
  ]);

  console.log(todos);

  const addtask = (newtask) => {
    setTodods([
      ...todos,
      { id: uuidv4(), task: newtask, isCompleted: false, isEdited: false },
    ]);
  };

  

  const deletetask = (id) => {
    const newtodolist = todos.filter((todo) => todo.id != id);
    setTodods(newtodolist);
  };
  const editTask = (editvalue, id) => {
    console.log(editvalue, id);
    const newtask = todos.map((todo) =>
      todo.id == id
        ? { ...todo, task: editvalue, isEdited: !todo.isEdited }
        : todo
    );
    setTodods(newtask);
  };
  const toogleHandeler = (id) => {
    
    const newtask = todos.map((todo) =>
      todo.id == id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );
    setTodods(newtask);
  };

  return (
    <div>
      <Mytodoform addtask={addtask} />
      {todos.map((todo) =>
        todo.isEdited ? (
          <MyEditlist todo={todo} editTask={editTask} />
        ) : (
          <Mytodolist
            todo={todo}
            deletetask={deletetask}
            editTask={editTask}
            toogleHandeler={toogleHandeler}
          />
        )
      )}
    </div>
  );
};

export default Mytodowrapper;
