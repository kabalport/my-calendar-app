// src/store/index.ts

import create from 'zustand';
import { getFromLocalStorage, saveToLocalStorage } from '../lib/localstorage';

type Task = {
    id: string;
    content: string;
};

type State = {
    tasks: Task[];
    addTask: (content: string) => void;
    deleteTask: (id: string) => void;
};

const initialTasks = getFromLocalStorage('tasks') || [];

export const useStore = create<State>((set) => ({
    tasks: initialTasks,
    addTask: (content) => {
        const newTask = { id: Date.now().toString(), content };
        set((state) => {
            const updatedTasks = [...state.tasks, newTask];
            saveToLocalStorage('tasks', updatedTasks);
            return { tasks: updatedTasks };
        });
    },
    deleteTask: (id) => {
        set((state) => {
            const updatedTasks = state.tasks.filter((task) => task.id !== id);
            saveToLocalStorage('tasks', updatedTasks);
            return { tasks: updatedTasks };
        });
    }
}));
