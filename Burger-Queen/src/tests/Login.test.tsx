import { render, fireEvent } from '@testing-library/react';
import Login from '../components/login/Login';



describe('Login', () => {
    test('actualizar los estados user y password al ingresar valores', () => {
        const { queryByPlaceholderText } = render(<Login />);
        
        const userInput = queryByPlaceholderText('Usuario') as HTMLInputElement | null;
        const passwordInput = queryByPlaceholderText('Contraseña') as HTMLInputElement | null;
      
        if (userInput && passwordInput) {
          fireEvent.change(userInput, { target: { value: 'john.doe' } });
          fireEvent.change(passwordInput, { target: { value: 'password123' } });
      
          expect(userInput.value).toBe('john.doe');
          expect(passwordInput.value).toBe('password123');
        }
      });
});