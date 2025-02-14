import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function toggleTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <body>
      <h1 className="position-fixed top-0 start-0 m-3 p-2 display-1 fw-bold text-primary">
        To-Do
      </h1>

      <div
        className="container bg-dark text-white p-4 rounded shadow mt-5 pt-5 text-center"
        style={{ width: "45%" }}
      >
        <h2 className="mb-4">To-Do List</h2>

        <div className="alert alert-info">
          Završeni zadaci: <strong>{completedTasks}</strong> / {totalTasks}
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Upiši zadatak..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>

        {totalTasks > 0 ? (
          <ol className="list-group">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  task.completed ? "bg-success text-white" : "bg-light"
                }`}
              >
                <span
                  className={
                    task.completed ? "text-decoration-line-through" : ""
                  }
                >
                  {task.text}
                </span>
                <button
                  className={`btn btn-${
                    task.completed ? "warning" : "success"
                  } btn-sm`}
                  onClick={() => toggleTask(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-muted">Nema dodanih zadataka.</p>
        )}
      </div>
    </body>
  );
}

export default ToDoList;
