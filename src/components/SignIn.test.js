import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SignIn from './SignIn';

describe('SignIn component', () => {
    test('renders SignIn component', () => {
        // Renderiza el componente
        render(<SignIn />);

        // Comprueba si los elementos esperados están presentes
        expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
    });
});
