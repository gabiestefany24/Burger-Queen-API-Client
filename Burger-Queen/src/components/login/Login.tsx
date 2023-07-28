import React, { useState} from 'react';
import styles from './Login.module.css';
import { requestget } from '../../request/request';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    setError('');
    requestget(user, password)
      .then((data) => {
        const token: string = data.accessToken;
        localStorage.setItem('token', token);
        const userRole = data.user.role;
        localStorage.setItem('userRole', userRole);
        if (userRole === 'admin') {
          navigate('/adminview');
        } else if (userRole === 'waiter') {
          navigate('/waiterorder');
        } else if (userRole === 'chef') {
          navigate('/chefview');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <article
        className={
          styles.backgroundLogin
        } /* style={{ background: `url(${background})` }} */
      >
        <article className={styles.container}>
          <article className={styles['login-container']}>
            <h1 className={styles.loginTitle}>INICIA SESIÓN</h1>
            <h2 className={styles.loginSubtitle}>
              Ingresa tus credenciales de acceso
            </h2>
            <form className={styles['login-form']}>
              <input
                className={styles.inputLogin}
                type='text'
                autoComplete='current-password'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder='Usuario'
              ></input>
              <input
                className={styles.inputLogin}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Contraseña'
              ></input>
            </form>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.loginButton} onClick={handleLogin}>
              INGRESAR
            </button>
          </article>
        </article>
      </article>
    </>
  );
};

export default Login;
