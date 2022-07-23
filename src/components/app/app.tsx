import { FC } from 'react';
import styles from './app.module.css';
import TasksBoard from "../tasks-board/tasks-board";

const App: FC = () => {
  return (
    <main>
      <TasksBoard />
    </main>
  );
}

export default App;