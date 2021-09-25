import Header from "./components/Header";
import "./css/bootstrap.min.css";
import Tasks from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Apprendre React",
      day: "Jul 28th at 12:10pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Jouer au Storm",
      day: "Jul 27th at 8:10am",
      reminder: false,
    },
    {
      id: 3,
      text: "Assister à Pycorn",
      day: "Jul 28th at 12:10pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Apprendre Rest-api",
      day: "Jul 28th at 12:10pm",
      reminder: true,
    },
  ]);

  const add_task = (task) => {
    setTasks ([...tasks, {...task, id:tasks.length + 1}])
  }

  const delete_task = (id) => {
    setTasks(
      tasks.filter((tasks) => {
        return tasks.id !== id;
      })
    );
  };
  const onToggle = (id)=>{
    setTasks( tasks.map((task) => {
      if (task.id !== id)
        return task
      else
        return { ...task, reminder: !task.reminder };
    }))
  }
  return (
    <div className="App">
      <Header />
      <AddTask addTask={add_task}/>
      <Tasks toggle={onToggle} tasks={tasks} Delete={delete_task} />
    </div>
  );
}

export default App;
