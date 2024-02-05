import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import AddTask from './components/AddTask/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Alma dyrelæge',
      completed: false,
    },
    {
      id: 2,
      text: 'Ditte tandlæge',
      completed: false,
    },
  ]);

  //
  const toggleComplete = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    const updatedTask = {
      ...taskToComplete,
      completed: !taskToComplete.completed,
    };
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: updatedTask.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const completed = false;
    const newTask = { id, ...task, completed };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (
        <List tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete}/>
      ) : (
        'Der er ingen opgaver!'
      )}
      <AddTask addTask={addTask} />
    </div>
  );
};

export default App;
