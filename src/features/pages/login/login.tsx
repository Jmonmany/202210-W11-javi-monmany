import { useEffect, useState } from 'react';
import { LoginForm } from '../../components/login/login.form';
import { getTasks, saveTasks } from '../../data/mock.service';
import { TaskType } from '../../models/task';

export default function Login() {
    const initialState: Array<TaskType> = [];

    const [tasks, setTasks] = useState(initialState);

    const handleLoad = async () => {
        const data = (await getTasks()) as Array<TaskType>;
        setTasks(data);
        console.log('LOAD');
    };

    const handleAdd = function (task: TaskType) {
        setTasks([...tasks, task]);
    };

    // const handleUpdate = function (task: Partial<TaskType>) {
    //     setTasks(
    //         tasks.map((item) =>
    //             item.id === task.id ? { ...item, ...task } : item
    //         )
    //     );
    // };

    useEffect(() => {
        handleLoad();
    }, []);

    useEffect(() => {
        if (tasks.length) {
            saveTasks(tasks);
        }
    }, [tasks]);

    return (
        <>
            <h2>Login</h2>
            <LoginForm handleAdd={handleAdd}></LoginForm>
        </>
    );
}
