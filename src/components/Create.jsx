import React from "react";
import { useRef } from "react";

const Create = ({ Tasks, setTasks, handleCreate }) => {
  const title = useRef();
  const desc = useRef();
  const due = useRef();

  function handleSave(e) {
    e.preventDefault();
    const dateString = due.current.value;
    if(dateString){
      
    }
    const timestamp = new Date(dateString).getTime();
    const dueDate = timestamp ? timestamp : null;
    const id = new Date().getTime();
    setTasks(prevTasks => [...prevTasks, {
      id,
      title: title.current.value,
      desc: desc.current.value,
      dueDate,
      Todos: [],
    }]);
    handleCreate();
  }
  return (
    <>
      <div className="w-[35rem] mt-16">
        <form className="mt-4" onSubmit={handleSave}>

        <menu className="flex items-center justify-end gap-4 my-4">
          <button onClick={handleCreate} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </menu>
        <p className="flex flex-col gap-1 my-4">
          <label
            htmlFor="title"
            className="text-sm font-bold uppercase text-stone-500"
            >
            Title
          </label>
          <input
            ref={title}
            id="title"
            required
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label
            htmlFor="desc"
            className="text-sm font-bold uppercase text-stone-500"
            >
            Description
          </label>
          <textarea
            ref={desc}
            id="desc"
            required
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label
            htmlFor="dueDate"
            className="text-sm font-bold uppercase text-stone-500"
            >
            Due Date(Optional)
          </label>
          <input
            ref={due}
            type="date"
            id="dueDate"
            name="DueDate"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            ></input>
        </p>
            </form>
      </div>
    </>
  );
};

export default Create;
