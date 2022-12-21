import { FormType } from "../models/task";
import { FORM } from "./mock.tasks";
export const getForms = (): Promise<Array<FormType>> => {
    return new Promise((resolve) => {
            const personalData = localStorage.getItem('PersonalForm');
            const accesData = localStorage.getItem('AccesData');
            if(!personalData || !accesData){
                localStorage.setItem('FakeForm', JSON.stringify(FORM));
                resolve(FORM)
            }
            resolve({...JSON.parse(personalData as string), ...JSON.parse(accesData as string)});
    });
};
export const savePersonalForm = async (form: object) => {
    console.log('Saving');
    localStorage.setItem('PersonalForm', JSON.stringify(form));
};
export const saveAccesData = async (form: object) => {
    console.log('Saving');
    localStorage.setItem('AccesData', JSON.stringify(form));
};
export const saveLogin = async (form: object) => {
    console.log('Saving');
    localStorage.setItem('Login', JSON.stringify(form));
};
