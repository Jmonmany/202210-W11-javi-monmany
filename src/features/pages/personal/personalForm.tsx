import { useState, SyntheticEvent } from "react";
import { savePersonalForm } from "../../data/mock.service";
import { Link } from 'react-router-dom';
export default function PersonalDataPage() {
    
    const handleForm = function (form: object) {
        savePersonalForm(form)
    };

    const initialFormData = {
        name: '',
        lastname: '',
        birthday: '',
        gender: '',
        email: '',
        isCompleted: false,
    };
  
    const [formData, setFormData] = useState(initialFormData);
    
    const getYears = () => {
        const now = new Date().getFullYear()
        const birth = +formData.birthday.slice(0,4)
        const age = "You are " + (now-birth) + " years old"
        return age 
    }

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleForm(formData)
    };

    const handleChange = () => {
        setFormData({ ...formData, isCompleted : !formData.isCompleted});
    };

    return (
        <>
            <h2>Personal data</h2>
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
                    <label className='label_inputs' htmlFor="birthday">Birth Date</label>
                    <input className='inputs'
                        type="date"
                        name="birthday"
                        id="birthday"
                        value={formData.birthday}
                        onInput={(ev) => {
                            handleInput(ev)
                            getYears()}}
                        placeholder="Write your Birthday"
                        required
                    />
                    <span>{formData.birthday ? getYears() : ''}</span>
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
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
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
        </>
    );
}
