import Task from "./Task";

const Tasks = ({ tasks, Delete, toggle, update }) => {
  return (
    <div className="container d-flex flex-column align-items-scretch mt-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} Delete={Delete} update_task={update} />
      ))}
    </div>
  );
};

export default Tasks;
