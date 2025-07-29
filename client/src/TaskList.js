import { useEffect, useState } from 'react';
import Task from './Task';
import "./App.css";


export default function TaskList() {

   const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
        const res = await fetch("/openTasks");
        const data = await res.json();
        setTasks(data);
        };
        fetchTasks();
        let interval = setInterval(() => fetchTasks(), 5000);

        return (() => { //we return a "cleanup" function that will be called on unmount, since we've set an interval we also need to clear it later.
            clearInterval(interval)
        })

    }, []);

    const emptyTaskList = () => {
        if (tasks.length === 0) {
            return <p>No Tasks!</p>;
        }
    }

    const listTasks = tasks.map(task => {
            return <Task task={task}/>
    });

    return (
        <div className="container">
            {emptyTaskList()}
            {listTasks}
        </div>
    )
}