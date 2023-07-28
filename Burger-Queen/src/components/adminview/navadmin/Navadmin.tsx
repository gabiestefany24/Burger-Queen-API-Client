import React from 'react';
import styles from './Navadmin.module.css';

interface NavadminProps {
  onOptionChange: (option: string) => void;
  selectedOption: string;
}

const Navadmin:  React.FC<NavadminProps> = ({ onOptionChange, selectedOption }) => {
     
  const handleClick = (option: string) => {
     
    onOptionChange(option);
  };

  return (
    <>
      <section className={styles.nav}>
        <nav className={styles.optionsNav}>
          <div className={styles.buttonsNav}>
            <button className= {selectedOption === 'adminUsers' ?  styles.btnactive : styles.btninactive}  onClick={()=>{handleClick('adminUsers');}}>
              Usuarios
            </button>
            <button className={selectedOption === 'adminProducts' ?  styles.btnactive : styles.btninactive}  onClick={()=>{handleClick('adminProducts');}}>
              Productos
            </button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navadmin;
