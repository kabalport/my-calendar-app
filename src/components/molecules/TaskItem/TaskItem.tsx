import React from 'react';
import styles from './taskItem.module.css';

interface TaskItemProps {
    task: string;
    onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
    return (
        <div className={styles.taskItem}>
            <span className={styles.taskContent}>{task}</span>
            <button className={styles.deleteButton} onClick={onDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
