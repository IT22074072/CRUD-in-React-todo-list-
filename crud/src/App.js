import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]); //states
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    //creating an object
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };

    // can't do this - setTodoList(newTask)
    //...spread operator
    //copy all the elements of the todoList to the newTodoList and append newTask
    //const newTodoList = [...todoList, newTask];
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
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
      return task.id !== id;
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
            //deleting the selected object not the task name like previously
            return (
              <div>
                <h1>{task.taskName}</h1>
                <button onClick={() => deleteTask(task.id)}>X</button>
              </div>
            );
          })}
        </div>
      </h1>
    </div>
  );
}

export default App;
