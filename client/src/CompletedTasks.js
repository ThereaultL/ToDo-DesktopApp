import { useEffect, useState } from 'react';

export default function CompletedTasks() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchCompleted = async () => {
      const res = await fetch("/completedTasks");
      const data = await res.json();
      setTasks(data);
    };
    fetchCompleted();
    let interval = setInterval(() => fetchCompleted(), 10000);

    return (() => { //we return a "cleanup" function that will be called on unmount, since we've set an interval we also need to clear it later.
      clearInterval(interval)
    })
  
  }, []);
  
  const emptyTaskList = () => {
    if (tasks.length === 0) {
      return <p>No Completed Tasks!</p>;
    }
  }
  
  const listTasks = tasks.map(task => {
    return (
      <div className="task-list">
        <div class="task-box-left">
          <h3>{task.title}</h3>
          <p>{task.details}</p>
        </div>
      </div>
    )
  });
  
  return (
    <div className="container">
      {emptyTaskList()}
      {listTasks}
    </div>
  )
}
