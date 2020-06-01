import React from 'react';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ToDoList />
    </React.Fragment>
  );
}

export default App;
