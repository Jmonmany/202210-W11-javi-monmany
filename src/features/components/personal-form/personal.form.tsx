import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
export function PersonalForm({
    handleForm,
}: {
    handleForm: (form: object) => void;
}, ) {
    const initialFormData = {
        name: '',
        lastname: '',
        birthDate: '',
        gender: '',
        email: '',
        isCompleted: false,
    };

    
    const [formData, setFormData] = useState(initialFormData);
    
    
    // {`You are ${~~((Date.now() - +formData.birthDate) / (31557600000))}`}
    
    const getYears = () => {
        const now = new Date().getFullYear()
        const birth = +formData.birthDate.slice(0,4)
        const age = "You are " + (now-birth) + " years old"
        return age 
    }

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();

        handleForm(formData);
        // setFormData(initialFormData);
    };

    const handleChange = () => {
        setFormData({ ...formData, isCompleted : !formData.isCompleted});
    };

    return (
        <section>
            <form className="add-task" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Write your name"
                        value={formData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={formData.lastname}
                        onInput={handleInput}
                        placeholder="Write your lastname"
                        required
                    />
                </div>
                <div className='inline age'>
                    <label className='label_inputs' htmlFor="birthDate">Birth Date</label>
                    <input className='inputs'
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        value={formData.birthDate}
                        onInput={(ev) => {
                            handleInput(ev)
                            getYears()}}
                        placeholder="Write your Birthdate"
                        required
                    />
                    <span>{formData.birthDate ? getYears() : ''}</span>
                </div>
                <div className='inline'>
                    <label className='label_inputs' htmlFor="male">Male</label>
                    <input className='inputs'
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onInput={handleInput}
                    />
                    <label className='label_inputs' htmlFor="female">Female</label>
                    <input className='inputs'
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onInput={handleInput}
                    />
                    <label className='label_inputs' htmlFor="undefined">prefer not to mention</label>
                    <input className='inputs'
                        type="radio"
                        name="gender"
                        id="undefined"
                        value="undefined"
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onInput={handleInput}
                        placeholder="Write your email"
                        required
                    />
                </div>
                <div className='inline'>
                    <label htmlFor="isCompleted">
                        Would you like to receive our newsletter?
                    </label>
                    <input className='inputs'
                        type="checkbox"
                        checked={formData.isCompleted}
                        onChange={handleChange}
                    />
                </div>
                <div className='inline'>
                    <button className='submit' type="submit" onClick={handleSubmit}><Link className='link' to='/step 2'>Next</Link></button>
                </div>
            </form>
        </section>
    );
}
