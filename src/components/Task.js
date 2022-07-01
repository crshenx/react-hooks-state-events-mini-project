import React from "react";

function Task({ text, category, deleter }) {
  function handleDelete(e) {
    deleter(e.target);
  }
  return (
    <div className="task" key={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
