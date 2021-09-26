import { FaTimes, FaEdit } from "react-icons/fa";

import taskcss from "./../css/task.module.css";
import { UpdateTask } from "./TaskUpdate";
import { DeleteTask} from "./DeleteTask"

const Task = ({ task, Delete, update_task }) => {
  return (
    <div
      key={task.id}
      className={`d-flex flex-row justify-content-between card m-2 p-3 bg-light ${
        task.reminder ? taskcss.reminder : ""
      }`}
    >
      <div>
        <span>{task.text}</span> <br />
        <span>{task.day}</span>
      </div>
      <div className="d-flex justify-content-end">
        <div className="d-flex flex-column justify-content-around">
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target={"#deleteTask" + task.id}
          />
          <UpdateTask update_task={update_task} task={task} id={task.id} />
          <DeleteTask delete_task={Delete} task={task} id={task.id} />
          <FaEdit
            data-bs-toggle="modal"
            data-bs-target={"#updateTask" + task.id}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
