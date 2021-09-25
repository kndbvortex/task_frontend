import { FaTimes } from "react-icons/fa";
import taskcss from "./../css/task.module.css"

const Task = ({ task, Delete, toggle }) => {
  return (
    <div
      key={task.id}
      className={`card m-2 p-3 bg-light ${task.reminder ? taskcss.reminder : ''}` }
      onDoubleClick={() => {
        toggle(task.id);
      }}
    >
      <span>{task.text}</span>
      <h3 className="d-flex justify-content-end">
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            Delete(task.id);
          }}
        />
      </h3>
      {task.day}
    </div>
  );
};

export default Task;
