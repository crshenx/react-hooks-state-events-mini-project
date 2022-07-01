import React from "react";
import { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [deleteTask, setDeleteTask] = useState(tasks);
  function deleter() {
    setDeleteTask(
      deleteTask.filter((task) => {
        console.log(task);
        return { ...task, text: "" };
      })
    );
  }
  // console.log(deleteTask);

  let updateList = deleteTask.filter((task) => {
    if (task.text.length > 1) {
      return task;
    }
  });

  return (
    <div className="tasks">
      {updateList.map((task) => {
        return (
          <Task
            text={task.text}
            category={task.category}
            key={task.text}
            deleter={deleter}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
