import React, { useState } from 'react';
import './AddTask.css';

const AddTask = () => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== '') {
    //   setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };
  return (
    <div className='addTaskDiv'>
      <input
      className='taskInput'
        type="text"
        placeholder="Tilføj en opgave til listen"
        value={task}
        onChange={handleTaskChange}
      />
      <button className='addTaskBtn' onClick={handleAddTodo}>TILFØJ</button>
    </div>
  );
};

export default AddTask;
