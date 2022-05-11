import "./styles.css";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]);

  function addToList(e) {
    console.log("testing");
    console.log(tasks);
    // console.log(e);
    setTasks(tasks.push(document.getElementById("task")));
    console.log(tasks.map((element) => "element"));
  }

  function print() {
    console.log(tasks);
  }

  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <label>Task</label>
        <input type="text" name="task" id="task" />
        <button onClick={addToList}>Add</button>
      </div>
      {print()}
    </div>
  );
}
