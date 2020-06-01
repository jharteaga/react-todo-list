import React, { useState } from 'react';
import {
  saveTask,
  getTasks,
  checkedTask,
  removeTask,
  updateTask,
} from '../Service';
import NewTask from './NewTask';
import Task from './Task';
import ProductivityChart from './ProductivityChart';

const ToDoList = (props) => {
  const [tasks, setTasks] = useState(() => getTasks());
  const [uTask, setUTask] = useState(undefined);

  const handleAddTask = (task) => {
    setTasks(() => saveTask(task));
  };

  const handleCheckedTask = (task) => {
    setTasks(checkedTask(task));
  };

  const handleNewTaskInput = (task) => {
    setUTask(task);
  };

  const handleUpdateTask = (newDescription, task) => {
    setTasks(() => updateTask(newDescription, task));
    setUTask(() => undefined);
  };

  const handleRemoveTask = (task) => {
    setTasks(() => removeTask(task));
  };

  return (
    <div className="main-container">
      <div className="todo-container">
        <NewTask
          onAddTask={handleAddTask}
          updateTask={uTask || {}}
          onUpdateTask={handleUpdateTask}
        />
        <Task
          tasks={tasks}
          onCheckedTask={handleCheckedTask}
          onRemoveTask={handleRemoveTask}
          onUpdateTaskInput={handleNewTaskInput}
        />
      </div>
      <ProductivityChart tasks={tasks} />
    </div>
  );
};

export default ToDoList;
