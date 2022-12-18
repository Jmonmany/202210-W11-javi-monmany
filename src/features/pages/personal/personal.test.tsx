import { render, screen } from '@testing-library/react';
import PersonalDataForm from './personal';

describe('Given TodoPage component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            const title = /Todo/i;
            render(<PersonalDataForm />);
            // Seleccionando por texto
            // const element = screen.getAllByText(/Learning Components/i);
            // La mejor práctica sería hacerlo por rol
            const elementHeader = screen.getByRole('heading', {
                name: title,
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
