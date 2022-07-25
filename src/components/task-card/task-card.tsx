import { FC } from 'react';
import styles from './task-card.module.css';
import rocketImage from '../../assets/images/icons/rocket.png';
import Task from "../../classes/task";
import ToDoComponent from "../to-do/to-do-component";

interface ITaskCardProps {
  task: Task;
}

const TaskCard: FC<ITaskCardProps> = ({ task }) => {

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{task.name}</h3>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={rocketImage} alt="Рокета" /> {/*todo: alt*/}
        </div>
      </div>
      {task.description && <span className={styles.description}>{task.description}</span>}
      <div className={styles.tagsContainer}>
        <span className={styles.tag}>first-tag</span>
        <span className={styles.tag}>second-tag</span>
      </div>
      <hr className={styles.line} />
      <div className={styles.toDoContainer}>
        {task.toDo.length > 0 && task.toDo.map(toDoTask =>
          <ToDoComponent key={toDoTask.id} toDo={toDoTask}/>
        )}
      </div>
    </li>
  );
}

export default TaskCard;