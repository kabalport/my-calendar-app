// src/views/Home.tsx

import React, { useState } from 'react';
import TaskModal from '../components/organisms/TaskModal/TaskModal';
import TaskItem from '../components/molecules/TaskItem/TaskItem';
import Calendar from '../components/organisms/Calendar/Calendar';
import useTasks from '../hooks/useTasks';

const Home: React.FC = () => {
    const { tasks, addTask, deleteTask } = useTasks();

    return (
        <div>
            <Calendar />
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task.content} onDelete={() => deleteTask(task.id)} />
            ))}
            <TaskModal onSave={addTask} />
        </div>
    );
};

export default Home;
