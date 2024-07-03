import './App.css';
import {useState} from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  return (
    <div className="App">
      <h1>
        <div className='addTask'>
          <input/>
          <button>Add Task</button>
        </div>
        <div className='list'></div>
      </h1>
    </div>
  );
}

export default App;
