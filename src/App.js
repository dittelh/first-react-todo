import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTask from './components/AddTask/AddTask';
import List from './components/List/List';

function App() {
  const [todos, setTodos] = useState([]);

  const handleToggleComplete = (id) => {
    // Implement logic to toggle the 'completed' status of a todo
  };

  const handleDeleteTodo = (id) => {
    // Implement logic to delete a todo
  };

  return (
    <div className="App">
      <Header />
      <List />
      <AddTask />
    </div>
  );
}

export default App;
