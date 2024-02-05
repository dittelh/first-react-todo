import { FaTrash } from 'react-icons/fa';

const Task = ({ task, deleteTask, toggleComplete }) => {
    console.log(task)
  return (
    <div>
      <h3>
        <input
          type="checkbox"
          checked={task.completed}
          value={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span className={(task.completed ? 'taskCompleted' : '')}>{task.text}</span>
        <FaTrash
          style={{ color: 'black', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
