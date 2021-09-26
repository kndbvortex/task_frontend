import React, { useState } from "react";
import add_task_css from "../css/task.module.css";
import hide_modal from "./utils"

const style = {
  height: "50px",
  fontSize: "1em",
};
export const UpdateTask = ({ update_task, task, id }) => {
  const [task_name, set_task_name] = useState(task.text);
  const [day, set_day] = useState(task.day);
  const [reminder, set_reminder] = useState(task.reminder);

  const on_submit = (e) => {
    e.preventDefault();
    var data = {
        id: task.id,
        text:task_name,
        day:day,
        reminder: reminder
    }
    update_task(data);
    hide_modal("updateTask" + task.id);

  };

  return (
    <section
      className="modal"
      id={"updateTask" + id}
      tabIndex="-1"
      aria-labelledby="updateTask"
      aria-hidden="true"
    >
      <div
        className={
          "modal-dialog modal-dialog-centered " + add_task_css.modal_component
        }
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-center">
            <h2 className="modal-title">Update Task</h2>
          </div>
          <div className="modal-body">
            <form
              className="container d-flex flex-column justify-content-between"
              id="form-create-task"
            >
              <div className="form-group col-12 col-lg-8">
                <label htmlFor="updated_name">Taks Name</label>
                <input
                  style={style}
                  type="text"
                  className="form-control"
                  id="taskName"
                  name="updated_name"
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
                <label htmlFor="updated_date">Date and time</label>
                <input
                  style={style}
                  type="text"
                  className="form-control"
                  id="date"
                  name="updated_date"
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
                  checked={reminder}
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
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
