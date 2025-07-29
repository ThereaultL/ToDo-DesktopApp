import React from 'react'

export default function Task({task}){

    const deleteTask = async () => {
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
    }

  return (
    <div>
        <h3>{task.title}</h3>
        <button onclick={deleteTask()}>Delete</button>
        <p>{task.details}</p>
    </div>
  )
}
