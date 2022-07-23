import { FC } from 'react';
import styles from './tasks-board.module.css';
import TaskCard from "../task-card/task-card";

const TasksBoard: FC = () => {

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tasksBoard}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ul>
    </div>
  );
}

export default TasksBoard;