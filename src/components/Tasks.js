import Task from "./Task";

const Tasks = ({ tasks, Delete }) => {
  return (
    <div className="container d-flex flex-column align-items-scretch mt-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} Delete={Delete} />
      ))}
    </div>
  );
};

export default Tasks;
