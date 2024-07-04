export const Task = (props) => {
  return (
    <div>
      <h1 style={{backgroundColor: props.completed ? "green" : "white"}}>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
