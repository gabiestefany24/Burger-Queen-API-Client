import React, { useState } from 'react';
import styles from './Chefview.module.css';
import OrderCard from '../orderCard/OrderCard';
import Header from '../header/Header';

const Chefview: React.FC = () => {
 
  const [status, setStatus] = useState('pending');

  const handleNavClick = (newStatus: string) => {
    setStatus(newStatus);
  };

  return (
    <>
      <Header/>
      <nav className={styles.optionsNav}>
        <div className={styles.buttonsNav}>

          <button className={status === 'pending'? styles.selectedBtnNav:styles.btnNav} onClick={() => handleNavClick('pending')}>Órdenes</button>
          <button className={status === 'delivering'? styles.selectedBtnNav:styles.btnNav}onClick={() => handleNavClick('delivering')}>Historial</button>
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
