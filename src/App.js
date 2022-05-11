import "./styles.css";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]);

  function addToList(e) {
    // console.log(tasks);
    setTasks(() => [...tasks, document.getElementById("task").value]);
  }

  // function print() {
  //   console.log(tasks);
  // }

  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <label>Task</label>
        <input type="text" name="task" id="task" />
        <button onClick={addToList}>Add</button>
      </div>
      {tasks.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </div>
  );
}
