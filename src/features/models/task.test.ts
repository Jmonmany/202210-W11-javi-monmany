import { Account } from './task';

describe('Given "Task" data model', () => {
    test('Then it should instantiate a task', () => {
        const mockTitle = 'Test task';
        const mockResponsible = 'Test user';
        const result = new Account(mockTitle, mockResponsible);
        expect(result).toBeInstanceOf(Account);
        expect(result).toHaveProperty('title', mockTitle);
        expect(result).toHaveProperty('responsible', mockResponsible);
        expect(result).toHaveProperty('isCompleted', false);
    });
});
