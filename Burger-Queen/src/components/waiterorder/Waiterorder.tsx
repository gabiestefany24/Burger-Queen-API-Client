import React, { } from 'react';
import { Link } from 'react-router-dom'
import styles from './Waiterorder.module.css'
import logo from '../../assets/smallLogo.png';
import lupa from '../../assets/searchIcon.png'
import outicon from '../../assets/outicon.png'
import add from '../../assets/añadir.png'
import reduce from '../../assets/disminuir.png'
import cancelorange from '../../assets/cancelorange.png'
import cancelwhite from '../../assets/cancelwhite.png'
import checkwhite from '../../assets/checkwhite.png'
import burger from '../../assets/burger.png'
import sandwich from '../../assets/sandwich.png'
import papas from '../../assets/papas.png'
import cafe from '../../assets/cafe.png'
import agua from '../../assets/agua.png'
import malteada from '../../assets/malteada.png'



const Waiterorder: React.FC = () => {


    return (
        <>
        <header className={styles.containerheader}>
            <img className= {styles.logo} src={logo} alt="Logo"></img> 
            <form className={styles.inputContainer}>
            <input className={styles.inputSearch} type='search' placeholder='Buscar productos' />
            <img className = {styles.lupa} alt="lupa" src={lupa} />
            </form>
            <img className={styles.outicon} src={outicon} alt="iconosalida"></img> 
        </header>
        <main className = {styles.backgroundwaiterorder}>
            <nav className = {styles.optionsNav}>
                <div className = {styles.buttonsNav}> 
                <Link className= {styles.btnDesayuno} to=''>Desayunos</Link>
                <Link className= {styles.btnComidaCena} to='' >Comida/Cena</Link>
                </div>            
            </nav>
            <section className={styles.containerProductosResumen}>
            <div className= {styles.productos}>
              <section className= {styles.cardsproducts}>
                <div className={styles.cardProduct}>
                    <img className= {styles.imgproduct} alt="burger" src={burger}></img>
                    <div className= {styles.titlecard}>
                    <p>Hamburguesa</p>
                    <p>$30.00</p>
                    </div>
                </div>
                <div className={styles.cardProduct}>
                    <img className= {styles.imgproduct} alt="sandwich" src={sandwich}></img>
                    <div className= {styles.titlecard}>
                    <p>Sandwich</p>
                    <p>$45.00</p>
                    </div>
                </div>
                <div className={styles.cardProduct}>
                    <img className= {styles.imgproduct} alt="papas" src={papas}></img>
                    <div className= {styles.titlecard}>
                        
                    <p>Papas</p>
                    <p>$25.00</p>
                    </div>                 
                </div>
                <div className={styles.cardProduct}>
                    <img className= {styles.imgproduct} alt="cafe" src={cafe}></img>
                    <div className= {styles.titlecard}>
                    <p>Café</p>
                    <p>$15.00</p>
                    </div>      
                </div>
                <div className={styles.cardProduct}>
                    <img className= {styles.imgproduct} alt="agua" src={agua}></img>
                    <div className= {styles.titlecard}>
                    <p>Agua</p>
                    <p>$15.00</p>
                    </div>
                </div>
                <div className={styles.cardProduct}>
                    <img className= {styles.imgproduct} alt="malteada" src={malteada}></img>
                    <div className= {styles.titlecard}>
                    <p>Malteada</p>
                    <p>$15.00</p>
                    </div>
                </div>
               </section> 
            </div> 
            <aside className= {styles.resumen}>
            <div className = {styles.containerClient}>
                <span>Cliente</span>
                <input className={styles.inputCliente} type='text'/>
            </div>
            <div className={styles.order}>
                <div className={styles.containerCuantity}>
                    <img className={styles.icon} src={reduce} alt="disminuir"></img>
                    <p className={styles.orderCuantity}>2</p>
                    <img className={styles.icon} src={add} alt="añadir"></img>
                </div>
                <p className={styles.orderProduct}>Café</p>
                <p className={styles.orderPrize}>$30.00</p>
                <img className={styles.cancelorange} src={cancelorange} alt="eliminar"></img>
            </div>
            <div className={styles.order}>
                <div className={styles.containerCuantity}>
                    <img className={styles.icon} src={reduce} alt="disminuir"></img>
                    <p className={styles.orderCuantity}>1</p>
                    <img className={styles.icon} src={add} alt="añadir"></img>
                </div>
                <p className={styles.orderProduct}>Hamburgesa</p>
                <p className={styles.orderPrize}>$45.00</p>
                <img className={styles.cancelorange} src={cancelorange} alt="eliminar"></img>
            </div>
            <div className={styles.containerTotal}>
            <p className={styles.totalTitle}>Total</p>
            <p className={styles.totalPrize}>$75.00</p>
            </div>
            <div className={styles.containerBtn}>
                <button className={styles.btnRemove}><img className={styles.cancelorange} src={cancelwhite} alt="eliminar"></img>Borrar Orden</button>
                <button className={styles.btnSend}><img className={styles.cancelorange} src={checkwhite} alt="enviar"></img>Enviar</button>
            </div>
            </aside>
            </section>
        </main>
        
            
        </>
    )

}

export default Waiterorder
