import { FC } from 'react';
import styles from './task-card.module.css';
import rocketImage from '../../assets/images/icons/rocket.png';

const TaskCard: FC = () => {

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>To DO</h3>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src={rocketImage} alt="Рокета" />
        </div>
      </div>
      <span className={styles.description}>Notes...</span>
      <div className={styles.tagsContainer}>
        <span className={styles.tag}>first-tag</span>
        <span className={styles.tag}>second-tag</span>
      </div>
      <hr className={styles.line} />
      <div className={styles.toDoContainer}>
        <label className={styles.toDo}>
          <label className={styles.checkboxContainer}>
            <input className={styles.checkbox} type={'checkbox'}/>
            <span className={styles.customCheckbox}></span>
          </label>
          <span className={styles.toDoText}>Add item</span>
        </label>
        <label className={styles.toDo}>
          <label className={styles.checkboxContainer}>
            <input className={styles.checkbox} type={'checkbox'}/>
            <span className={styles.customCheckbox}></span>
          </label>
          <span className={styles.toDoText}>Delete item</span>
        </label>
      </div>
    </li>
  );
}

export default TaskCard;