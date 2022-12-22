export type FormType = {
    name: string;
    lastname: string;
    birthday: string;
    isCompleted: boolean;
    gender: string;
    email: string;
    username: string;
    password: string;
    accountType: string;
};

export class Account implements FormType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    isCompleted: boolean;
    constructor(
        public name: string, 
        public lastname: string, 
        public birthday: string,
        public gender: string,
        public email: string,
        public username: string,
        public password: string,
        public accountType: string
        ) {
        this.id = Account.generateId();
        this.isCompleted = false;
    }
}
