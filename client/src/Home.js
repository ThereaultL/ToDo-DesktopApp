import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import CompletedTasks from "./CompletedTasks";

export default function Home() {
  const [taskType, setTaskType] = useState(<TaskList />);
  const [addText, setAddText] = useState("+");
  const [completeText, setCompleteText] = useState("-Completed-");
  const [logout, setLogout] = useState(false);

  const handleAdd = (e) => {
    if (taskType.type.name === "TaskList") {
      setTaskType(<CreateTask />);
      setAddText("<- Back");
      setCompleteText("");
    } else {
      setTaskType(<TaskList />);
      setAddText("+");
      setCompleteText("-Completed-");
    }
  };

  const handleCompleted = (e) => {
    if (taskType.type.name === "TaskList") {
      setTaskType(<CompletedTasks />);
      setAddText("<- Back");
      setCompleteText("");
    } else {
      setTaskType(<TaskList />);
      setAddText("+");
      setCompleteText("-Completed-");
    }
  };

  if (logout) {
    return <Navigate to="/" />;
  }

  return (
    <div className="home">
      <div class="header">
        <button class="logout" onClick={() => setLogout(true)}>
          Logout
        </button>
        <h1 class="title">To-Do:</h1>
      </div>
      <div class="glass">
        <button class="add" onClick={handleAdd}>
          {addText}
        </button>
        {taskType}
        <button class="complete" onClick={handleCompleted}>
          {completeText}
        </button>
      </div>
    </div>
  );
}
