import React, { useState } from "react";
import add_task_css from "../css/task.module.css";

const style = {
  height: "50px",
  fontSize: "1em",
};
export const AddTask = ({ addTask }) => {
  const [task_name, set_task_name] = useState("");
  const [day, set_day] = useState("");
  const [reminder, set_reminder] = useState(false);

  const on_submit = (e) => {
    e.preventDefault();
    if (task_name === "") {
      
    } else {
      addTask({
        text: task_name,
        day: day,
        reminder: reminder,
      });
      set_day("");
      set_reminder("");
      set_task_name("");
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
          <div className="modal-header">
            <h2 className="modal-title centered">
              Add a task
            </h2>
          </div>
          <div className="modal-body">
            <form className="container d-flex flex-column justify-content-between">
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
