import { useState, SyntheticEvent } from "react";
import { saveAccesData } from "../../data/mock.service";
import { Link } from 'react-router-dom';

export default function AccesDataPage() {
    const handleForm = function (form: object) {
        saveAccesData(form)
    };

    const initialAccessData = {
        userName: '',
        password: '',
        confirmPassword: '',
        accountType: '',
    };
  
    const [formData, setFormData] = useState(initialAccessData);
    
    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleForm(formData)
    };

    return (
        <>
            <h2>Access data</h2>
            <form className="add-task" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Write a username"
                        value={formData.userName}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Write a password"
                        value={formData.password}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="password">Repeat the password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Write your password again"
                        value={formData.confirmPassword}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="accountType">Account Type</label>
                    <select
                        name="accountType"
                        id="accountType"
                        value={formData.accountType}
                        onInput={handleInput}
                    >
                        <option value="">Select an option</option>
                        <option value="personal">Personal</option>
                        <option value="pro">Pro</option>
                        <option value="business">Business</option>
                    </select>
                </div>

                <div className='inline'>
                    <button className='submit'><Link className='link' to='/step 1'>Previous</Link></button>
                    <button className='submit' type="submit" onClick={handleSubmit}><Link className='link' to='/step 3'>Next</Link></button>
                </div>
            </form>
        </>
    );
}
