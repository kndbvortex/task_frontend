import Header from "./components/Header";
import "./css/bootstrap.min.css";
import Tasks from "./components/Tasks";
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
  const delete_task = (id) => {
    setTasks(
      tasks.filter((tasks) => {
        return tasks.id !== id;
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} Delete={delete_task} />
    </div>
  );
}

export default App;
