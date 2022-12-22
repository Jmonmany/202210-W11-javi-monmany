import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import PersonalDataPage from './personalForm';

describe('Given personalForm component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            const title = /Personal data/i;
            render(
            <Router>
                <PersonalDataPage/>
            </Router>
            );
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
