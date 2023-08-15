const LOCAL_STORAGE_KEY = "my_calendar_app_tasks";



export const getFromLocalStorage = (key: string): any => {
    const rawData = localStorage.getItem(key);
    return rawData ? JSON.parse(rawData) : null;
};

export const saveToLocalStorage = (key: string, value: any): void => {
    const rawData = JSON.stringify(value);
    localStorage.setItem(key, rawData);
};


export const removeFromLocalStorage = () => {
    try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (error) {
        console.error("Failed to remove tasks from local storage.", error);
    }
};
