import React, { useState } from 'react';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask!== '') {
      setTasks([...tasks, { id: tasks.length + 1, task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {...task, completed:!task.completed };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id!== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed? 'completed' : ''}>
            <span>{task.task}</span>
            <button onClick={() => handleComplete(task.id)}>Complete</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
