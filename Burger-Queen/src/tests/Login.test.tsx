/* import '@testing-library/jest-dom';
import { render, waitFor, fireEvent, screen} from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import { requestget } from '../request/request';

jest.mock('../../src/assets/fondo_login.png', () => ({
  add: jest.fn(),
}));

jest.mock('../../src/request/request', () => ({
  requestget: jest.fn(),
}));

const requestgetMock = requestget as jest.MockedFunction<typeof requestget>;

describe('Login', () => {

  beforeEach (()=>{
    window.history.pushState(
      {},
      '/',
      window.location.origin + '/',
    );
  });
 
  test('handleLogin funciona correctamente con waiter', async () => {
    // Mock de las funciones necesarias
    requestgetMock.mockResolvedValueOnce({
      accessToken: 'asfsdgdjjsj',
      user: { email: 'gabriela@MediaList.com', 
        role: 'waiter', 
        id: 3 },
    });

    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/waiterorder"
            element={
              <div>
                <p>waiter</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );

    // Ingresa las credenciales en los campos de usuario y contraseña
    const userInput = getByPlaceholderText('Usuario');
    const passwordInput = getByPlaceholderText('Contraseña');

    fireEvent.change(userInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Simula el clic en el botón "INGRESAR"
    const loginButton = getByText('INGRESAR');
    fireEvent.click(loginButton);

    // Espera a que se resuelva la promesa en handleLogin
    await waitFor(() => {
      expect(requestget).toHaveBeenCalledWith('username', 'password'); // Pasar los valores de usuario y contraseña al mock
   
    });
    await waitFor(() => {
      expect(localStorage.getItem('userRole')).toBe('waiter');
      expect(document.location.pathname).toBe('/waiterorder');
      expect(screen.getByText('waiter')).toBeInTheDocument();
      
    });
  });

  screen.debug();

  test('handleLogin funciona correctamente con admin', async () => {
    localStorage.clear();
    // Mock de las funciones necesarias
    requestgetMock.mockResolvedValueOnce({
      accessToken: 'asfsdgdjjsj',
      user: { email: 'gabriela@MediaList.com', 
        role: 'admin', 
        id: 3 },
    });

    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/adminview"
            element={
              <div>
                <p>admin</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
    
    // Ingresa las credenciales en los campos de usuario y contraseña
    const userInput = getByPlaceholderText('Usuario');
    const passwordInput = getByPlaceholderText('Contraseña');

    fireEvent.change(userInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Simula el clic en el botón "INGRESAR"
    const loginButton = getByText('INGRESAR');
    fireEvent.click(loginButton);

    // Espera a que se resuelva la promesa en handleLogin
    await waitFor(() => {
      expect(requestget).toHaveBeenCalledWith('username', 'password'); // Pasar los valores de usuario y contraseña al mock
 
    });
   
    await waitFor(() => {
      expect(localStorage.getItem('userRole')).toBe('admin');
      expect(document.location.pathname).toBe('/adminview');
      expect(screen.getByText('admin')).toBeInTheDocument();
      console.log(document.location.pathname);
      
    });
  });

  test('handleLogin funciona correctamente con chef', async () => {
    localStorage.clear();
    // Mock de las funciones necesarias
    requestgetMock.mockResolvedValueOnce({
      accessToken: 'asfsdgdjjsj',
      user: { email: 'gabriela@MediaList.com', 
        role: 'chef', 
        id: 3 },
    });

    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chefview"
            element={
              <div>
                <p>chef</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
    
    // Ingresa las credenciales en los campos de usuario y contraseña
    const userInput = getByPlaceholderText('Usuario');
    const passwordInput = getByPlaceholderText('Contraseña');

    fireEvent.change(userInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Simula el clic en el botón "INGRESAR"
    const loginButton = getByText('INGRESAR');
    fireEvent.click(loginButton);

    // Espera a que se resuelva la promesa en handleLogin
    await waitFor(() => {
      expect(requestget).toHaveBeenCalledWith('username', 'password'); // Pasar los valores de usuario y contraseña al mock
 
    });
   
    await waitFor(() => {
      expect(localStorage.getItem('userRole')).toBe('chef');
      expect(document.location.pathname).toBe('/chefview');
      expect(screen.getByText('chef')).toBeInTheDocument();
      console.log(document.location.pathname);
      
    });
  });

  test('Error', async () => {
    localStorage.clear();
    // Mock de las funciones necesarias
    requestgetMock.mockRejectedValue(new Error('Login failed'));

    const {getByText} = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chefview" element={<div><p>Chef</p></div>} />
        </Routes>
      </BrowserRouter>
    );
  
    // Simula el clic en el botón "INGRESAR"
    const loginButton = getByText('INGRESAR');
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(document.location.pathname).toBe('/');
      expect(requestgetMock('usuario', 'contraseña')).rejects.toThrow(new Error('Login failed'));
    });
    
  });
});

 */