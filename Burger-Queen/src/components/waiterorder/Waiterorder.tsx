import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import ProductCard,  {Product} from '../productCard/ProductCard';
import Ordersummary from '../ordersummary/ordersummary';
import styles from './Waiterorder.module.css'
import logo from '../../assets/smallLogo.png';
import lupa from '../../assets/searchIcon.png'
import outicon from '../../assets/outicon.png'
import cancelwhite from '../../assets/cancelwhite.png'
import checkwhite from '../../assets/checkwhite.png'


const Waiterorder: React.FC = () => {

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const handleRemoveItem = (itemId: number) => {
        setSelectedProducts((prevSelectedProducts) =>
          prevSelectedProducts.filter((product) => product.id !== itemId)
        );
      };
    

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
                <div className= {styles.products}>
                    <section className= {styles.cardsproducts}>
                        {ProductCard && 
                        <ProductCard 
                        selectedProducts={selectedProducts}
                        onSelectProduct={(product) => setSelectedProducts((prevProducts) => [...prevProducts, product])} />} 
                    </section>
                </div>
            <aside className= {styles.summary}>
            <div className = {styles.containerClient}>
                <span>Cliente</span>
                <input className={styles.inputCliente} type='text'/>
            </div>

            {Ordersummary && <Ordersummary selectedProducts={selectedProducts} onRemoveItem={handleRemoveItem} />}


       {/*      <div className={styles.containerTotal}>
            <p className={styles.totalTitle}>Total</p>
            <p className={styles.totalPrize}> ${calculateTotalPrice()}</p>
            </div> */}
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

