import { FC } from 'react';
import styles from './task-card.module.css';

const TaskCard: FC = () => {

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>To DO</h3>
        <div className={styles.iconContainer}>
          {/*<img src="" alt="">*/}
        </div>
      </div>
      <span className={styles.description}>Notes...</span>
      <hr className={styles.line} />
      <div className={styles.toDoContainer}>
        <span>Add item</span>
        <span>Delete item</span>
      </div>
    </li>
  );
}

export default TaskCard;