import React from 'react'
import './App.css';

export default function CreateTask() {

    const [title, setTitle] = React.useState("Title");
    const [details, setDetails] = React.useState("Details");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }   

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch(
            "/createTask", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                details: details
            }),
        });

        if (response.ok) {
            setTitle("Title");
            setDetails("Details");
            alert("New task created successfully");
        } else {
            alert("Failed to create new task");
        }
    }

    return (
        <div className="input-box">
            <form class="create-box" onSubmit={handleSubmit}>
                <input class="input" type="text" placeholder={title} onChange={handleTitleChange} required />
                <input class="input" type="text" placeholder={details} onChange={handleDetailsChange} />
                <button class="create" type="submit">Create</button>

            </form>
        </div>
    )
}

