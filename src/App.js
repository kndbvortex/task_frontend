import Header from "./components/Header";
import "./css/bootstrap.min.css";
import Tasks from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const update_task = (task) => {
    fetch(`http://127.0.0.1:8000/tasks/${task.id}/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((response) => {
        setTasks(
          tasks.map((t) => {
            if (t.id !== task.id) return t;
            else return response;
          })
        );
      })
      .catch((error) => alert("Erreur : " + error));
  
  }
  
  const add_task = (task) => {
    fetch(`http://127.0.0.1:8000/tasks/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(task),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTasks([...tasks, response]);
      })
      .catch((error) => alert("Erreur : " + error));
  };

  const delete_task = (id) => {
    fetch(`http://127.0.0.1:8000/tasks/${id}/`,{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        setTasks(
          tasks.filter((task) => {
            return (task.id !== id);
          })
        );
      })
      .catch((error) => alert("Erreur : " + error));
  };


  const search = ()=>{
    const text = document.getElementById("search");
    fetch("http://127.0.0.1:8000/tasks/?search="+text.value)
      .then((response) => response.json())
      .then((response) => {
        setTasks(response);
      })
      .catch((error) => alert("Erreur : " + error));
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/tasks/")
      .then((response) => response.json())
      .then((response) => {
        setTasks(response);
      })
      .catch((error) => alert("Erreur : " + error));
  }, []);

  return (
    <div className="App">
      <Header />
      <form
        className="container mt-4 d-flex flex-raw justify-content-center"
        id="form-create-task"
      >
        <div className="form-group col-10 col-md-8 m-0 d-flex flex-raw justify-content-center">
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            style={{
              fontSize: "0.8em",
              height: "30px",
            }}
          />
          <button
            style={{
              color: "white",
              height: "30px",
              fontSize: "0.8em",
            }}
            type="submit"
            className="btn col-3 col-md-2 bg-primary"
            onClick = {(e) => {e.preventDefault(); search()}}
          >
            Search
          </button>
        </div>
      </form>

      <AddTask addTask={add_task} />
      <Tasks
        tasks={tasks}
        Delete={delete_task}
        update={update_task}
      />
    </div>
  );
}

export default App;
