import React, { useState } from 'react';
import styles from './Login.module.css'
import background from '../../assets/fondo_login.png'
import requestget from '../../request.ts'

const Login: React.FC = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
        <article className= {styles.backgroundLogin} style={{ background: `url(${background})` }}>
            <article className={styles.container}>
                <article className={styles['login-container']}>
                    <h1 className={styles.loginTitle}>LOGIN</h1> 
                    <h2 className={styles.loginSubtitle}>Ingresa tus credenciales de acceso</h2>
                    <form className={styles['login-form']}>
                        <input className={styles.inputLogin} type='text' value={user}
        onChange={(e) => setUser(e.target.value)} placeholder='Usuario'></input>
                        <input className={styles.inputLogin} type='password'  value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña'></input>
                        
                    </form>
                    <button className={styles.loginButton} onClick={() => requestget(user,password)}>INGRESAR</button>
                </article>
            </article>
        
        </article>
            
        </>
    )
}

export default Login