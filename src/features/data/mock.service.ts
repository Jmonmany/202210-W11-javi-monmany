import { Account, TaskType } from '../models/task';
import { TASKS } from './mock.tasks';

export const getTasks = () => {
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         const data = localStorage.getItem('Tasks');
    //         if (!data) {
    //             localStorage.setItem('Tasks', JSON.stringify(TASKS));
    //             resolve(TASKS);
    //         }
    //         resolve(JSON.parse(data as string) as Array<TaskType>);
    //     }, 2000);
    // });
};

export const saveTasks = async (form: object) => {
    console.log('Saving');
    localStorage.setItem('PersonalForm', JSON.stringify(form));
};