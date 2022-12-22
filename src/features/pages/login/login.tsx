import { useState, SyntheticEvent, useEffect } from "react";
import { getForms } from "../../data/mock.service";
import { FormType } from "../../models/task";
export default function Login() {
    const initialFormData: Partial<FormType> = {
        username: '',
        password: '',
        isCompleted: false,
        name: '',
    };
    const initialState: Partial<FormType> = {};

    const [formData, setFormData] = useState(initialFormData);
    const [userData, setData] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleLoad = async () => {
        const data = await getForms();
        console.log(data)
        setData(data)
    };

    useEffect(() => {
        handleLoad()
    }, []);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        if(formData.username === userData.username &&
           formData.password === userData.password){
            setFormData({...formData, isCompleted : true})
          }else{
            setFormData({...formData, name : 'Invalid password!'})
          }
    };
    
    return (
        <>
            <section className="login">
                {
                formData.isCompleted ? 
                <>
                <h2>Your data summary</h2><ul>
                    <li>Name: {userData.name}</li>
                    <li>Lastname: {userData.lastname}</li>
                    <li>Username: {userData.username}</li>
                    <li>Birthdate: {userData.birthday}</li>
                    <li>E-mail: {userData.email}</li>
                    <li>Gender: {userData.gender}</li>
                    <li>Account type: {userData.accountType}</li>
                    <li>Newsletter: {userData.isCompleted ? 'Subscribed' : 'Not subscribed'}</li>
                </ul>
                </> : 
                <>
                <h2>Login</h2><form className="add-task" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={formData.username}
                                onInput={handleInput}
                                required />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="password"
                                id="password"
                                value={formData.password}
                                onInput={handleInput}
                                placeholder="Password"
                                required />
                        </div>
                        <div className='inline'>
                            <button className='submit' type="submit" onClick={handleSubmit}>Access</button>
                        </div>
                        <p className="invalidpass">{formData.name}</p>
                    </form>
                    </>
                    }
            </section>
        </>
    );
}
