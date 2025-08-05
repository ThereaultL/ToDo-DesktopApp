import React from 'react';
import './App.css';
import TaskList from './TaskList';
import CreateTask from './CreateTask';
import CompletedTasks from './CompletedTasks';

export default function Home() {

  const [taskType, setTaskType] = React.useState(<TaskList />);
  const [addText, setAddText] = React.useState('+');
  const [completeText, setCompleteText] = React.useState('-Completed-');

  const handleAdd = (e) => {
    if(taskType.type.name === 'TaskList') {
      setTaskType(<CreateTask />);
      setAddText('<- Back');
      setCompleteText('');
    } else { 
      setTaskType(<TaskList />);
      setAddText('+');
      setCompleteText('-Completed-');
    }
  };

  const handleCompleted = (e) => {
    if(taskType.type.name === 'TaskList') {
      setTaskType(<CompletedTasks />);
      setAddText('<- Back');
      setCompleteText('');
    } else {
      setTaskType(<TaskList />);
      setAddText('+');
      setCompleteText('-Completed-');
    }
  };

  return (
    <div className="home">
      <h1 class="title">To-Do:</h1>
      <div class="glass">
        <button class="add" onClick={handleAdd}>{addText}</button>
        {taskType}
        <button class="complete" onClick={handleCompleted}>{completeText}</button>
      </div>
    </div>
  );
}