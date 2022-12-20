import { useEffect, useState } from 'react';
import { ConfirmForm } from '../../components/confirmation/confirm.form';
import { getTasks, saveTasks } from '../../data/mock.service';
import { TaskType } from '../../models/task';

export default function Confirmation() {
    const initialState: Array<TaskType> = [];

    const [tasks, setTasks] = useState(initialState);

    const handleLoad = async () => {
        // const data = (await getTasks()) as Array<TaskType>;
        // setTasks(data);
        // console.log('LOAD');
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
            <h2>Confirmation</h2>
            <ConfirmForm handleAdd={handleAdd}></ConfirmForm>
        </>
    );
}
