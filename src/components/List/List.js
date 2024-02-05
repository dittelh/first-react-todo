import './List.css';
import Task from '../Task';

const List = ({ deleteTask, tasks, toggleComplete }) => {

  return (
    <div className="listDiv">
      <ul className="listItems">
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete}/>
        ))}
      </ul>
    </div>
  );
};

export default List;
