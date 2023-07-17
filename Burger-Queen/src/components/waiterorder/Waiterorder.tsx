
import React, {useState} from 'react';
import ProductCard,  {Product} from '../productCard/ProductCard';
import Ordersummary from '../ordersummary/ordersummary';
import styles from './Waiterorder.module.css'
import Header from '../header/Header';
import Waitermodal from './waitermodal/Waitermodal';
import { createOrder } from '../../utils/order';



const Waiterorder: React.FC = () => {

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const [selectedCategory, setSelectedCategory] = useState<string>('Desayuno');
    const [isOrderCreated, setIsOrderCreated] = useState<boolean>(false); 

    const handleRemoveItem = (itemId: number) => {
        setSelectedProducts((prevSelectedProducts) =>
            prevSelectedProducts.filter((product) => product.id !== itemId)
        );
    };

    const clearOrder = (setClient: React.Dispatch<React.SetStateAction<string>>) => {
        setSelectedProducts([]);
        setClient('');
    };
    
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };
    const handleRemoveModal = (state:boolean) => {
        setIsOrderCreated(state);
    }

    const handleCreateOrder = (client: string, selectedProducts: Product[], quantities: { [key: number]: number }): Promise<string> => {
        return new Promise((resolve, reject) => {
          createOrder(client, selectedProducts, quantities)
            .then((response) => {
              setIsOrderCreated(true);
              resolve(response);
            })
            .catch((error) => {
              // Manejar el error en caso de que la orden no se pueda crear
              console.log(error);
              reject(error);
            });
        });
      };
      

    return (
        <>
            <Header/>
            <main className={styles.backgroundwaiterorder}>
                <aside className={styles.productsAside}>
                <section className= {styles.nav}>
                    <nav className={styles.optionsNav}>
                        <div className={styles.buttonsNav}>
                            <button className={`${styles.btnDesayuno} ${selectedCategory === 'Desayuno' ? styles.btnComidaCena : ''}`} onClick={() => handleCategoryClick('Desayuno')} >Desayunos</button>
                            <button className={`${styles.btnDesayuno} ${selectedCategory === 'Almuerzo' ? styles.btnComidaCena : ''}`} onClick={() => handleCategoryClick('Almuerzo')}>Comida/Cena</button>
                        </div>
                    </nav>
                    <p className={styles.instructions}> Presione los productos que desee agregar a la orden. </p>
                </section>
                <section className={styles.containerProductosResumen}>
                    <div className={styles.products}>
                        <section className={styles.cardsproducts}>
                            {ProductCard &&
                                <ProductCard
                                    selectedCategory={selectedCategory}
                                    selectedProducts={selectedProducts}
                                    onSelectProduct={(product) => setSelectedProducts((prevProducts) => [...prevProducts, product])} />}
                        </section>
                    </div> 
                </section>
                </aside>
                
                <aside className={styles.summary}>
                        {Ordersummary && <Ordersummary selectedProducts={selectedProducts} onRemoveItem={handleRemoveItem} clearOrder={clearOrder} createOrder={handleCreateOrder} />}
                </aside>
                
            </main>
            {isOrderCreated && <Waitermodal removeModal={handleRemoveModal} />}

        </>
    )

}

export default Waiterorder

