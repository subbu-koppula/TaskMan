import React from "react";
import { useState, useEffect } from "react";
import Empty from "./components/Empty";
import Create from "./components/Create";
import Task from "./components/Task";

function App() {
  const [Tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    console.log("Saving tasks to localStorage:", Tasks);
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);

  const [Creating, setCreating] = useState(false);
  const [details, setDetails] = useState(0);

  function handleCreate() {
    setCreating((create) => !create);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
            Tasks
          </h2>
          <div>
            <button
              onClick={handleCreate}
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            >
              Create New tasks
            </button>

            <ul className="mt-8">
              {Tasks.map((obj) => (
                <button
                  key={obj.id}
                  onClick={() => setDetails(obj.id)}
                  className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                >
                  {obj.title}
                </button>
              ))}
            </ul>
          </div>
        </aside>
        {Creating ? (
          <Create
            Tasks={Tasks}
            setTasks={setTasks}
            handleCreate={handleCreate}
          />
        ) : details ? (
          <Task
            id={details}
            setDetails={setDetails}
            Tasks={Tasks}
            setTasks={setTasks}
          />
        ) : (
          <Empty handleCreate={handleCreate} />
        )}
      </main>
    </>
  );
}

export default App;
