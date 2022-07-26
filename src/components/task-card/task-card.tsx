import { FC, useEffect, useRef, useState } from 'react';
import styles from './task-card.module.css';
import rocketImage from '../../assets/images/icons/rocket.png';
import Task from "../../classes/task";
import ToDoComponent from "../to-do/to-do-component";
import CollapseButton from "../collapse-button/collapse-button";
import useSmoothCollapse from "../../services/hooks/useSmoothCollapse";

interface ITaskCardProps {
  task: Task;
}

const TaskCard: FC<ITaskCardProps> = ({ task }) => {
  const descriptionRef = useRef<HTMLSpanElement>(null);
  const [ isDescriptionLong, setIsDescriptionLong ] = useState<boolean>(false);
  const [ isDescriptionCollapsed, setIsDescriptionCollapsed ] = useState<boolean>(true);
  useSmoothCollapse(descriptionRef.current, isDescriptionCollapsed, 3);

  const toggleFullDescription = () => {
    setIsDescriptionCollapsed(!isDescriptionCollapsed);
  }

  useEffect(() => {
    const descriptionElement = descriptionRef.current;

    if (descriptionElement && descriptionElement.offsetHeight < descriptionElement.scrollHeight) {
      setIsDescriptionLong(true);
    }
  }, [descriptionRef])

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{task.name}</h3>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={rocketImage} alt="Рокета" /> {/*todo: alt*/}
        </div>
      </div>
      {task.description &&
        <span
          className={`${styles.description} ${!isDescriptionCollapsed ? styles.fullDescription : ''}`}
          ref={descriptionRef}
        >
          {task.description}
        </span>
      }
      {isDescriptionLong && <CollapseButton isCollapsed={isDescriptionCollapsed} onClick={toggleFullDescription} />}
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