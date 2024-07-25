import React from "react";
import { useState } from "react";
import PractiseTodoForm from "./PractiseTodoForm";
import PractiseTodoList from "./PractiseTodoList";
import { v4 as uuid } from "uuid";
const PractTodowrapper = () => {
  const [todolist, settodolist] = useState([
    { id: uuid(), task: "Hey", isCompleted: false },
  ]);

  const getData = (value) => {
    settodolist([...todolist, { id: uuid(), task: value, isCompleted: false }]);
  };

  const deletelist = (id) => {
    settodolist(todolist.filter((todo) => todo.id != id));
  };

  const togglehandeler = (id, todoval) => {
    settodolist(
      todolist.map((todo) =>
        todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  return (
    <div>
      <PractiseTodoForm getData={getData} />
      {todolist.map((todo) => {
        return (
          <PractiseTodoList
            todo={todo}
            deletelist={deletelist}
            togglehandeler={togglehandeler}
          />
        );
      })}
    </div>
  );
};

export default PractTodowrapper;
