import React, { useState, useEffect } from 'react';
import { saveTask, getTasks, updateTask } from '../Service';
import NewTask from './NewTask';
import Task from './Task';

const ToDoList = (props) => {
  const [tasks, setTasks] = useState(getTasks());

  const handleAddTask = (task) => {
    setTasks(saveTask(task));
  };

  const handleUpdateTask = (task) => {
    setTasks(updateTask(task));
  };

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <div className="todo-container">
      <NewTask onAddTask={handleAddTask} />
      <Task tasks={tasks} onUpdateTask={handleUpdateTask} />
    </div>
  );
};

export default ToDoList;
