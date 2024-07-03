import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // can't do this - setTodoList(newTask)
    //...spread operator
    //copy all the elements of the todoList to the newTodoList and append newTask
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
          {todoList.map((task) => {  //displaing tasks one by one
            return <h1>{task}</h1>;
          })}
        </div>
      </h1>
    </div>
  );
}

export default App;
