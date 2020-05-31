import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const NewTask = ({ onAddTask, updateTask, onUpdateTask }) => {
  const [val, setVal] = useState(updateTask ? updateTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (updateTask) setVal(updateTask.description);
    setVal(e.target.value);
  };

  useEffect(() => {
    setVal(updateTask.description);
  }, [updateTask.description]);

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="newTask">
        <Form.Control
          type="text"
          placeholder="Enter new task"
          className="new-task-txt"
          onKeyUp={(e) => {
            if (e.keyCode === 13 && e.target.value !== '') {
              if (updateTask.hasOwnProperty('description')) {
                onUpdateTask(e.target.value, updateTask);
              } else {
                onAddTask(e.target.value);
              }
              setVal('');
            }
          }}
          onChange={(e) => handleChange(e)}
          value={val}
        />
      </Form.Group>
    </Form>
  );
};

export default NewTask;
