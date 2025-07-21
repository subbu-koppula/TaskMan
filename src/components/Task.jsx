import React from "react";
import ToDo from "../components/ToDo/ToDo"

const Task = ({ id, Tasks, setTasks }) => {
  const crtObj = Tasks.find((value) => value.id === id);
  const date = new Date(id);
  const dateString = date.toDateString();
  return (
    <div className="w-2/3 mt-16 flex gap-5 flex-col">
      <div className="flex items-center justify-between">
        <div className="flex-col gap-2 justify-end">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {crtObj.title}
          </h1>
          <p className="mb-4 text-stone-400">{dateString}</p>
        </div>
        <button className="text-stone-600 hover:text-stone-950">Cancel</button>
      </div>
      <p className="text-stone-600 whitespace-pre-wrap">{crtObj.desc}</p>
      <hr className="border-t-4"></hr>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">SubTasks</h2>
      <ToDo Tasks={Tasks} setTasks={setTasks} id={id} />
    </div>
  );
};

export default Task;
