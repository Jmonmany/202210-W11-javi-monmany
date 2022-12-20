import { useEffect, useState } from "react";
import { MenuItems } from "../../../core/types/menu.item";
import { PersonalForm } from "../../components/personal-form/personal.form";
import { getTasks, saveTasks } from "../../data/mock.service";
import { TaskType } from "../../models/task";
export default function PersonalDataPage() {
    
    const initialState: Array<TaskType> = [];

    const [tasks, setTasks] = useState(initialState);

    const handleLoad = async () => {
        // const data = (await getTasks()) as Array<TaskType>;
        // setTasks(data);
        // console.log('LOAD');
    };

    const handleForm = function (form: object) {
        saveTasks(form)
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
            <h2>Personal data</h2>
            <PersonalForm handleForm={handleForm}></PersonalForm>
        </>
    );
}
