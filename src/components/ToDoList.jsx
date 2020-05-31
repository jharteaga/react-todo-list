import React, { useState, useEffect } from 'react';
import {
  saveTask,
  getTasks,
  checkedTask,
  removeTask,
  updateTask,
} from '../Service';
import NewTask from './NewTask';
import Task from './Task';

const ToDoList = (props) => {
  const [tasks, setTasks] = useState(getTasks());
  const [uTask, setUTask] = useState(undefined);

  const handleAddTask = (task) => {
    setTasks(saveTask(task));
  };

  const handleCheckedTask = (task) => {
    setTasks(checkedTask(task));
  };

  const handleNewTaskInput = (task) => {
    setUTask(task);
  };

  const handleUpdateTask = (newDescription, task) => {
    setTasks(updateTask(newDescription, task));
  };

  const handleRemoveTask = (task) => {
    setTasks(removeTask(task));
  };

  useEffect(() => {}, [tasks, uTask]);

  return (
    <div className="todo-container">
      <NewTask
        onAddTask={handleAddTask}
        updateTask={uTask}
        onUpdateTask={handleUpdateTask}
      />
      <Task
        tasks={tasks}
        onCheckedTask={handleCheckedTask}
        onRemoveTask={handleRemoveTask}
        onUpdateTaskInput={handleNewTaskInput}
      />
    </div>
  );
};

export default ToDoList;
