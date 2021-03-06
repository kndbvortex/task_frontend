import React, { useState } from "react";
import add_task_css from "../css/task.module.css";
import hide_modal from "./utils";

const style = {
  height: "50px",
  fontSize: "1em",
};
export const AddTask = ({ addTask }) => {
  const [task_name, set_task_name] = useState("Conception d'un SI");
  const [day, set_day] = useState("10-12-2022");
  const [reminder, set_reminder] = useState(false);

  const on_submit = (e) => {
    e.preventDefault();
    if (task_name === "") {
      var input = document.getElementById("error_task_name");
      input.classList.remove("d-none");
    } else {
 
      addTask({
        text: task_name,
        day: day,
        reminder: reminder,
      });
      set_day("");
      set_reminder("");
      set_task_name("");
      hide_modal("addTask");
    }
  };

  return (
    <section
      className="modal"
      id="addTask"
      tabIndex="-1"
      aria-labelledby="addTask"
      aria-hidden="true"
    >
      <div
        className={
          "modal-dialog modal-dialog-centered " + add_task_css.modal_component
        }
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-center">
            <h2 className="modal-title">Add a task</h2>
          </div>
          <div className="modal-body">
            <form
              className="container d-flex flex-column justify-content-between"
              id="form-create-task"
            >
              <div className="form-group col-12 col-lg-8">
                <label htmlFor="name">Taks Name</label>
                <input
                  style={style}
                  type="text"
                  className="form-control"
                  id="taskName"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter de name of the task"
                  value={task_name}
                  onChange={(e) => set_task_name(e.target.value)}
                />
                <div
                  className="invalid-text d-none text-danger"
                  id="error_task_name"
                >
                  Please enter the name of the task!
                </div>
              </div>
              <div className="form-group col-12 col-lg-8">
                <label htmlFor="date">Date and time</label>
                <input
                  style={style}
                  type="text"
                  className="form-control"
                  id="date"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  value={day}
                  onChange={(e) => set_day(e.target.value)}
                />
              </div>
              <div className="form-check col-12 col-lg-8">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={reminder}
                  onChange={(e) => set_reminder(e.currentTarget.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Reminder
                </label>
              </div>
              <hr />
              <button
                style={{
                  height: "2.5em",
                  fontSize: "1em",
                  borderRadius: "5%",
                  backgroundColor: "#FFCC00",
                  color: "black",
                  fontWeight: "bold",
                }}
                type="submit"
                className="col-3"
                onClick={on_submit}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
