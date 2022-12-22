import { FORM } from '../data/mock.tasks';
import { Account } from './task';

describe('Given "Task" data model', () => {
    test('Then it should instantiate a task', () => {
        const mockAccount = new Account('John', 'Salchichón', '1900-10-10', 'male', 'john_salchichón', 'johnny', 'john1990', 'personal')
        expect(mockAccount).toBeInstanceOf(Account);
        expect(mockAccount).toHaveProperty('name', FORM.name);
        expect(mockAccount).toHaveProperty('lastname', FORM.lastname);
        expect(mockAccount).toHaveProperty('isCompleted', FORM.isCompleted);
    });
});
