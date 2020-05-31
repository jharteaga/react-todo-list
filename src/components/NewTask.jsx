import React from 'react';
import { Form } from 'react-bootstrap';

const NewTask = ({ onAddTask, updateTask, onUpdateTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="newTask">
        <Form.Control
          type="text"
          placeholder="Enter new task"
          className="new-task-txt"
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              if (updateTask) {
                onUpdateTask(e.target.value, updateTask);
              } else {
                onAddTask(e.target.value);
              }
              e.target.value = '';
            }
          }}
        />
      </Form.Group>
    </Form>
  );
};

export default NewTask;
