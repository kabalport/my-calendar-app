// src/components/organisms/TaskModal/TaskModal.tsx

import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../atoms/Button/Button';
import styles from './taskModal.module.css';

type TaskModalProps = {
    onSave: (taskContent: string) => void;
};

Modal.setAppElement('#root');

const TaskModal: React.FC<TaskModalProps> = ({ onSave }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [task, setTask] = useState<string>('');

    const handleSave = () => {
        if (task.trim()) {
            onSave(task);
        }
        setTask('');
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Add Task</Button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h2 className={styles.modalHeader}>Add Task</h2>
                <input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter your task"
                />
                <div className={styles.buttonContainer}>

                <Button onClick={handleSave}>Save</Button>
                </div>
            </Modal>
        </>
    );
};

export default TaskModal;
