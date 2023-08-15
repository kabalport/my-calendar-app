// src/hooks/useTasks.ts

import { useStore } from '../store';

const useTasks = () => {
    const tasks = useStore((state) => state.tasks);
    const addTask = useStore((state) => state.addTask);
    const deleteTask = useStore((state) => state.deleteTask);

    return { tasks, addTask, deleteTask };
};

export default useTasks;
