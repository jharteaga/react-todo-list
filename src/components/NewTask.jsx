import React from 'react';
import { Form } from 'react-bootstrap';
import { saveTask } from '../Service';

const NewTask = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNewTask = (task) => {
    saveTask(task);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="newTask">
        <Form.Control
          type="text"
          placeholder="Enter new task"
          className="new-task-txt"
          onKeyUp={(e) => {
            if (e.keyCode === 13) handleNewTask(e.target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
};

export default NewTask;
