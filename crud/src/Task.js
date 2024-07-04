export const Task = (props) => {
  <div>
    <h1>{props.taskName}</h1>
    <button onClick={() => props.deleteTask(props.id)}>X</button>
  </div>;
};
