import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './Chefview.module.css';
// import logo from "../../assets/smallLogo.png";
// import lupa from "../../assets/searchIcon.png";
// import outicon from "../../assets/outicon.png";
import OrderCard from '../orderCard/OrderCard';
// import handleLogout from '../../utils/Logout';
import Header from '../header/Header';

const Chefview: React.FC = () => {
  // const navigate = useNavigate();
  const [status, setStatus] = useState('pending');
  // const [chefview, setChefview] = useState<boolean>(false); 

  const handleNavClick = (newStatus: string) => {
    setStatus(newStatus);
  };

  return (
    <>
      <Header/>
      <nav className={styles.optionsNav}>
        <div className={styles.buttonsNav}>

          <button className={status === 'pending'? styles.selectedBtnNav:styles.btnNav} onClick={() => handleNavClick("pending")}>Órdenes</button>
          <button className={status === 'delivering'? styles.selectedBtnNav:styles.btnNav}onClick={() => handleNavClick("delivering")}>Historial</button>
        </div>
      </nav>
      <section className={styles.containercheforders}>
      <OrderCard status={status} />
      <div data-testid="status" className={styles.hidden}>{status}</div>

      </section>
    </>
  );
};

export default Chefview;