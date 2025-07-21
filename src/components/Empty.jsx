import React from "react";

const Empty = ({handleCreate}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Task Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a task or create a new one.</p>
      <button onClick={handleCreate} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Create New Task</button>
    </div>
  );
};

export default Empty;
