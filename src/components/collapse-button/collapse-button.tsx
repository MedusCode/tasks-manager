import { FC } from 'react';
import styles from './collapse-button.module.css';

interface ICollapseButtonProps {
  isCollapsed: boolean;
  onClick: () => void;
}

const CollapseButton: FC<ICollapseButtonProps> = ({ isCollapsed, onClick }) => {

  return (
    <button className={`${styles.button} ${!isCollapsed && styles.opened}`} onClick={() => {onClick()}}>
      <div className={styles.leftLine}></div>
      <div className={styles.rightLine}></div>
    </button>
  );
}

export default CollapseButton;