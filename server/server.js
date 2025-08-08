const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const port = 5000;

const app = express(); //initilize the server
app.use(cors());
app.use(express.json()); //parsing applicaiton and json

let openTasks = [];
let completedTasks = [];

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, //make sure to create this database in your MySQL server
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  const values = [req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Login Failed");
    }
    if (data.length > 0) {
      return res.json("Login Successful");
    } else {
      return res.status(401).json("Wrong email or password");
    }
  });
});

app.get("/openTasks", (req, res) => {
  res.json(openTasks);
});

app.get("/completedTasks", (req, res) => {
  res.json(completedTasks);
});

app.post("/createTask", (req, res) => {
  const { title, details } = req.body;
  let task = {
    title: title,
    details: details,
  };
  openTasks.push(task);
  res.json({ message: "Task created successfully" });
});

app.delete("/deleteTask", (req, res) => {
  const { title, details } = req.body;
  const i = openTasks.findIndex(
    (t) => t.title === title && t.details === details
  );
  if (i > -1) {
    const removed = openTasks.splice(i, 1)[0];
    completedTasks.push(removed);
    res.status(200).json({ message: "Task completed" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
