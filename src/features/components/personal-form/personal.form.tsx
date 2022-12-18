import { SyntheticEvent, useState } from 'react';
import { TaskType } from '../../models/task';

export function PersonalForm({
    handleAdd,
}: {
    handleAdd: (task: TaskType) => void;
}) {
    const initialFormData = {
        name: '',
        lastname: '',
        age: '',
        gender: '',
        email: '',
        isCompleted: false,
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        console.log('Input');
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        // ev.preventDefault();
        // handleAdd(
        //     new Task(
        //         formData.title as string,
        //         formData.responsible ? formData.responsible : ''
        //     )
        // );
        // setFormData(initialFormData);
    };

    const handleChange = () => {
        // item.isCompleted = !item.isCompleted;
        // handleUpdate(item);
    };

    return (
        <section>
            <h3>Añadir tarea</h3>
            <form className="add-task" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Name</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Describe la tarea"
                        value={formData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="responsible">Last Name</label>
                    <input
                        type="text"
                        name="responsible"
                        id="responsible"
                        value={formData.lastname}
                        onInput={handleInput}
                        placeholder="Responsable de la tarea"
                    />
                </div>
                <div>
                    <label htmlFor="responsible">Birth Date</label>
                    <input
                        type="text"
                        name="responsible"
                        id="responsible"
                        value={formData.age}
                        onInput={handleInput}
                        placeholder="Responsable de la tarea"
                    />
                </div>
                <div>
                    <label htmlFor="responsible">Gender</label>
                    <input
                        type="text"
                        name="responsible"
                        id="responsible"
                        value={formData.gender}
                        onInput={handleInput}
                        placeholder="Responsable de la tarea"
                    />
                </div>
                <div>
                    <label htmlFor="responsible">Email</label>
                    <input
                        type="text"
                        name="responsible"
                        id="responsible"
                        value={formData.email}
                        onInput={handleInput}
                        placeholder="Responsable de la tarea"
                    />
                </div>
                <div>
                    <label htmlFor="responsible">
                        Would you like to receive our newsletter?
                    </label>
                    <input
                        type="checkbox"
                        checked={formData.isCompleted}
                        // checked={formData.isCompleted} !! tiene que cambiar
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </section>
    );
}
