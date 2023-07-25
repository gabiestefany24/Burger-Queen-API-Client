import styles from './Header.module.css';
import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/smallLogo.png';
import lupa from '../../assets/searchIcon.png';
import outicon from '../../assets/outicon.png';
import handleLogout from '../../utils/Logout';
import iconcreate from '../../assets/iconcreate.png';
import icondelivering from '../../assets/icondelivering.png';
import iconadmingreen from '../../assets/iconadmingreen.png';
import chef from '../../assets/chef.png';

const Header:React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={styles.containerheader}>
        <img className={styles.logo} src={logo} alt="Logo"></img>
        <form className={styles.inputContainer}>
          <input
            className={styles.inputSearch}
            type="search"
            placeholder="Buscar productos"
          />
          <img className={styles.lupa} alt="lupa" src={lupa} />
        </form>

        {localStorage.getItem('userRole') !='chef' && 
          <div className={styles.containerIcons}>
            {localStorage.getItem('userRole') ==='admin' && 
            <>
              <Link className={styles.links} to="/adminmain">
                <div className={styles.containerCreateOrderIcon}>
                  <img className={styles.createOrderIcon} src={iconadmingreen}></img>
                  <span>Administrar</span>
                </div>
              </Link> 
              <Link className={styles.links} to="/chefview">
                <div className={styles.containerOrdersIcon}>
                  <img className={styles.ordersIcon} src={chef}></img>
                  <span>Cocina</span>
                </div>
              </Link> 
            </>
            }
            <Link className={styles.links} to="/waiterorder">
              <div className={styles.containerCreateOrderIcon}>
                <img className={styles.createOrderIcon} src={iconcreate}></img>
                <span>Crear orden</span>
              </div>
            </Link>
            <Link className={styles.links} to="/waiterdelivering">
              <div className={styles.containerOrdersIcon}>
                <img className={styles.ordersIcon} src={icondelivering}></img>
                <span>Ordenes</span>
              </div>
            </Link>
          </div>
        }
        <img
          className={styles.outicon}
          src={outicon}
          alt="iconosalida"
          onClick={() => handleLogout(navigate)}>
        </img>
      </header>
    </>
  );
};
export default Header;