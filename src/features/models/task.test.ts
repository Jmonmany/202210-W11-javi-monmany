import { FORM } from '../data/mock.tasks';
import { Account } from './task';

describe('Given "Task" data model', () => {
    test('Then it should instantiate a task', () => {
        const mockAccount = new Account('John', 'Salchichón', '1900-10-10', 'male', 'john_salchichón', 'johnny', 'john1990', 'personal')
        expect(mockAccount).toBeInstanceOf(Account);
        expect(mockAccount).toHaveProperty('name', FORM[0].name);
        expect(mockAccount).toHaveProperty('lastname', FORM[0].lastname);
        expect(mockAccount).toHaveProperty('isCompleted', FORM[0].isCompleted);
    });
});
