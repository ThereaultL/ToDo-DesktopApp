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
    const { task } = req.body;
    remove = openTasks.findIndex(t => t === task);
    if (remove === -1) {
        completedTasks.push(task);
        openTasks.splice(remove, 1);
        res.status(200).json({ message: "Task deleted successfully"});
    } else {
        res.status(400).json({ message: "Task not found"});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});

function main() {
    return null;
}

if(require.main === module) {
    main();
}