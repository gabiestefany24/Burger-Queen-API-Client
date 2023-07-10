import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ProductCard,  {Product} from '../productCard/ProductCard';
import Ordersummary from '../ordersummary/ordersummary';
import styles from './Waiterorder.module.css'
import logo from '../../assets/smallLogo.png';
import lupa from '../../assets/searchIcon.png'
import outicon from '../../assets/outicon.png'
import handleLogout from '../Logout/Logout';



const Waiterorder: React.FC = () => {

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    const handleRemoveItem = (itemId: number) => {
        setSelectedProducts((prevSelectedProducts) =>
          prevSelectedProducts.filter((product) => product.id !== itemId)
        );
    };
    
    const clearOrder = (setClient: React.Dispatch<React.SetStateAction<string>>) => {
        setSelectedProducts([]);
        setClient('');
    };

    return (
        <>
        <header className={styles.containerheader}>
            <img className= {styles.logo} src={logo} alt="Logo"></img> 
            <form className={styles.inputContainer}>
            <input className={styles.inputSearch} type='search' placeholder='Buscar productos' />
            <img className = {styles.lupa} alt="lupa" src={lupa} />
            </form>
            <img className={styles.outicon} src={outicon} alt="iconosalida" onClick={() => handleLogout(navigate)}></img> 
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
            {Ordersummary && <Ordersummary selectedProducts={selectedProducts} onRemoveItem={handleRemoveItem} clearOrder={clearOrder} />}
            </aside>
            </section>
        </main>
        
            
        </>
    )

}

export default Waiterorder

