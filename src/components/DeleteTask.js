import React from "react";
import add_task_css from "../css/task.module.css";
import hide_modal from "./utils";

export const DeleteTask = ({ delete_task, task, id }) => {
  
  const deleteTask = (e) => {
    e.preventDefault();
    delete_task(id);
    hide_modal("deleteTask" + id);
  };

  return (
    <section
      className="modal"
      id={"deleteTask" + id}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div
        className={
          "modal-dialog modal-dialog-centered " + add_task_css.modal_component
        }
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-center">
            <h2 className="modal-title">Delete Task</h2>
          </div>
          <div className="modal-body">
            <form
              className="container d-flex flex-column justify-content-between"
              id="form-create-task"
            >
              <div className="form-group col-12 col-lg-8">
                <h1>Voulez-vous Vraiment Supprimez cette tâche?</h1>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              style={{
                height: "2.5em",
                fontSize: "1em",
                borderRadius: "5%",
                color: "white",
                fontWeight: "bold",
              }}
              type="submit"
              className="col-3 bg-danger"
              onClick={deleteTask}
            >
              Delete
            </button>
            <button
              style={{
                height: "2.5em",
                fontSize: "1em",
                borderRadius: "5%",
                color: "white",
                fontWeight: "bold",
              }}
              className="col-3 bg-warning"
              onClick={(e) => hide_modal("deleteTask" + id)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
