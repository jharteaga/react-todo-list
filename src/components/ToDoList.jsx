import React from 'react';
import NewTask from './NewTask';
import Task from './Task';

const ToDoList = (props) => {
  return (
    <div className="todo-container">
      <NewTask />
      <Task />
    </div>
  );
};

export default ToDoList;
