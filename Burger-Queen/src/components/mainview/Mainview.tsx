import styles from './Mainview.module.css';
import logo from '../../assets/fullLogo.png';
import { useNavigate } from 'react-router-dom';

const Mainview: React.FC = () => {

  const navigate = useNavigate();
  const navigateToLogin = (): void => {
    navigate('/login');
  };
  return (
    <>
      <article className={styles.backgroundImageSection} >
        <article className={styles['container-mainview']}>
          <img className={styles.bigLogo} src={logo} alt="Mi imagen" />
          <article className={styles['welcomeMessage-article']}>
            <h1 className={styles.mainViewTitle}>
            ¡BIENVENIDA, QUEEN!
            </h1>
            <h2 className={styles.mainViewSubtitle}>
            Ingresa para continuar
            </h2>
            <button className={styles['loginButon-mainview']} onClick={navigateToLogin}>INGRESAR</button>
          </article>
        </article> 
      </article>
    </>
  );
};

export default Mainview;