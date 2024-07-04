import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]); //states
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

  const deleteTask = (taskName) => {
    /*
    const arr = ["Dini", "Pipi", "JK"];
    const newArr = arr.filter((name)=>{   //logic of the filter function to delete a specific task
      if(name === "Dini"){
        return false
      } else{
        return true
      }
    })  */

    const newTodoList = todoList.filter((task) => {
      /*
      if(task === taskName){
        return false
      } else{
        return true
      }
      */
      return task !== taskName;
    });

    setTodoList(newTodoList);  
    // by single line - setTodoList(todoList.filter((task) => task !== taskName));
  };
  
  

  return (
    <div className="App">
      <h1>
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
          {todoList.map((task) => {
            //displaing tasks one by one
            return (
              <div>
                <h1>{task}</h1>
                <button onClick={() => deleteTask(task)}>X</button>
              </div>
            );
          })}
        </div>
      </h1>
    </div>
  );
}

export default App;
