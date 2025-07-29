const express = require("express");
const cors = require("cors")

const PORT = 5000;

const app = express(); //initilize the server
app.use(cors());
app.use(express.json()); //parsing applicaiton and json

let openTasks = [];
let completedTasks = [];

app.get("/openTasks", (req, res) => {
    res.json(openTasks);
});

app.get("/completedTasks", (req, res) => {
    res.json(completedTasks);
});

app.post("/createTask", (req, res) => {
    const {title, details} = req.body;
    let task = {
        title: title,
        details: details  
    }
    openTasks.push(task);
    res.json({ message: "Task created successfully"});
});

app.delete("/deleteTask", (req, res) => {
    const { title, details } = req.body;
    const i = openTasks.findIndex((t) => t.title === title && t.details === details );
    if (i > -1) {
        const removed = openTasks.splice(i, 1)[0];
        completedTasks.push(removed);
        res.status(200).json({ message: "Task completed" });
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});