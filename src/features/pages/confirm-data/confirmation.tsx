import { SyntheticEvent, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getForms } from "../../data/mock.service";
import { FormType } from "../../models/task";
export default function Confirmation() {
    const personalData = localStorage.getItem('PersonalForm');
    const accesData = localStorage.getItem('AccesData');
    
    const forms = {...JSON.parse(personalData as string), ...JSON.parse(accesData as string)}
    
    console.log(forms)
    // const initialState: Array<FormType> = [];

    // const [forms, setTasks] = useState(initialState);

    // const handleLoad = async () => {
    //     const data = await getForms();
    //     console.log(data)
    //     setTasks(data)
    // };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
    };

    // useEffect(() => {
    //     handleLoad()
    // }, []);

    // useEffect(() => {
    //     console.log('useEffect', { forms });
    //     if (forms.length) {
    //         localStorage.setItem('FakeForm', JSON.stringify(forms));
    //     }
    // }, [forms]);

    return (
        <>
            <h2>Confirmation</h2>
            <form className="add-task" onSubmit={handleSubmit}>
                <div className='inline'>
                    <label htmlFor="userName">Name: </label>
                    <p>{forms.name}</p>
                </div>
                <div className='inline'>
                    <label htmlFor="password">Last name: </label>
                    <p>{forms.lastname}</p>
                </div>
                <div className='inline'>
                    <label htmlFor="password">Birthday: </label>
                    <p>{forms.birthday}</p>
                </div>
                <div className='inline'>
                    <label htmlFor="accountType">Gender: </label>
                    <p>{forms.gender}</p>
                </div>
                <div className='inline'>
                    <label htmlFor="accountType">Email: </label>
                    <p>{forms.email}</p>
                </div>
                <div className='inline'>
                    {forms.isCompleted ? <label htmlFor="accountType">Subscribed to Newletters</label> : ''}
                </div>
                <div className='inline'>
                    <label htmlFor="accountType">Username: </label>
                    <p>{forms.username}</p>
                </div>
                <div className='inline'>
                    <label htmlFor="accountType">Password: </label>
                    <p>{forms.password}</p>
                </div>
                <div className='inline'>
                    <label htmlFor="accountType">Account Type: </label>
                    <p>{forms.account}</p>
                </div>
                <div className='inline'>
                    <button className='submit'><Link className='link' to='/step 2'>Previous</Link></button>
                    <button className='submit' type="submit" onClick={handleSubmit}><Link className='link' to='/step 4'>Confirm</Link></button>
                </div>
            </form>
        </>
    );
}
