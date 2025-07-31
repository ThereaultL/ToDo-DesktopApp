import React from 'react'
import './App.css';

export default function Task({task}){

    const [btnClass, setBtnClass] = React.useState("complete-button");

    const deleteTask = async () => {
        setBtnClass("complete-button-clicked");

        const response = await fetch(
            "/deleteTask", {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: task.title,
                details: task.details
            }),
        });

        if(response.ok) {
            alert("Task deleted successfully");
        } else {
            alert("Failed to delete task");
        }

        setBtnClass("complete-button");
    }

  return (
    <div className="task-list">
        <div class="task-box-left">
            <p class="task-title">{task.title}</p>
            <p class="task-details">{task.details}</p>
        </div>
        <div class="task-box-right">
            <button class={btnClass} onClick={deleteTask}></button>
        </div>
    </div>
  )
}
