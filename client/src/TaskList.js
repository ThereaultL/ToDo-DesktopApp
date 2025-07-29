import { useEffect, useState } from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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