import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Chefview.module.css";
import logo from "../../assets/smallLogo.png";
import lupa from "../../assets/searchIcon.png";
import outicon from "../../assets/outicon.png";
import OrderCard from "../orderCard/OrderCard";
import handleLogout from '../Logout/Logout';

const Chefview: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("pending");

  const handleNavClick = (newStatus: string) => {
    setStatus(newStatus);
  };

  return (
    <>
      <header className={styles.containerheader}>
        <img className={styles.logo} src={logo} alt="Logo"></img>
        <form className={styles.inputContainer}>
          <input
            className={styles.inputSearch}
            type="search"
            placeholder="Buscar orden"
          />
          <img className={styles.lupa} alt="lupa" src={lupa} />
        </form>
        <img className={styles.outicon} src={outicon} alt="iconosalida" onClick={() => handleLogout(navigate)}></img>
      </header>
      <nav className={styles.optionsNav}>
        <div className={styles.buttonsNav}>
          <button className={styles.btnNav} onClick={() => handleNavClick("pending")}>Órdenes</button>
          <button className={styles.btnNav} onClick={() => handleNavClick("delivering")}>Historial</button>
        </div>
      </nav>
      <section className={styles.containercheforders}>
        <OrderCard status={status} />
      </section>
    </>
  );
};

export default Chefview;