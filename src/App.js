import React from 'react';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import ProductivityChart from './components/ProductivityChart';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="main-container">
        <ToDoList />
        <ProductivityChart />
      </div>
    </React.Fragment>
  );
}

export default App;
