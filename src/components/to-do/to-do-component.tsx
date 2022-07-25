import { FC, useState } from 'react';
import styles from './to-do-component.module.css';
import ToDo from "../../classes/to-do";

interface IToDoProps {
  toDo: ToDo;
}

const ToDoComponent: FC<IToDoProps> = ({ toDo }) => {
  const [ isDone, setIsDone ] = useState<boolean>(toDo.isDone);

  const handleCheckboxChange = () => {
    toDo.swapIsDone();
    setIsDone(toDo.isDone);
  }

  return (
    <label className={styles.toDo}>
      <label className={styles.checkboxContainer}>
        <input className={styles.checkbox} type={'checkbox'} checked={isDone} onChange={handleCheckboxChange}/>
        <span className={styles.customCheckbox}></span>
      </label>
      <span className={styles.toDoText}>{toDo.task}</span>
    </label>
  );
}

export default ToDoComponent;