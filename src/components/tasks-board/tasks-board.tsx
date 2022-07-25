import { FC } from 'react';
import styles from './tasks-board.module.css';
import TaskCard from "../task-card/task-card";
import { useAppSelector } from "../../services/hooks/redux-hooks";

const TasksBoard: FC = () => {
  const tasks = useAppSelector(store => store.tasks.tasks);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tasksBoard}>
        {tasks.map(task =>
          <TaskCard key={task.id} task={task} />
        )}
      </ul>
    </div>
  );
}

export default TasksBoard;