import React, {  } from 'react';
import styles from './Waiterorder.module.css'
import logo from '../../assets/smallLogo.png';
import lupa from '../../assets/searchIcon.png'
//import outicon from '../../assets/'



const Waiterorder: React.FC = () => {


    return (
        <>
        <header>
            <img className= {styles.logo} src={logo} alt="Logo"></img> 
            <input className={styles.inputLogin} type='search' placeholder='Buscar productos'> <img alt="lupa" src={lupa}></img></input>
            <img className= {styles.outicon} src='' alt="iconosalida"></img> 
        </header>
        <nav>
            desayunos
        </nav>
        <main>
            <section>
            productos
            </section>
            <aside>
                Resumen
            </aside>
        </main>
        
            
        </>
    )

}

export default Waiterorder
