import "./App.css";
import { useState } from "react";
import { Task } from "./Task";


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
      completed: false,
    };

    // can't do this - setTodoList(newTask)
    //...spread operator
    //copy all the elements of the todoList to the newTodoList and append newTask
    //const newTodoList = [...todoList, newTask];
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };


  const completeTask = (id)=>{
    setTodoList(
      todoList.map((task) => {
        if(task.id === id){
          return {...task, completed: true};  //task element remains the same, but completed is set to true
        }else{
          return task;
        }
      })
    )

  }


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
            return <Task key ={task.id} taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask}/>;
          })}
        </div>
      </h1>
    </div>
  );
}

export default App;
