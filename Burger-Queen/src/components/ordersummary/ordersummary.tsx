import React from 'react';
import { Product } from '../productCard/ProductCard';
import add from '../../assets/añadir.png'
import reduce from '../../assets/disminuir.png'
import cancelorange from '../../assets/cancelorange.png'
import styles from './ordersummary.module.css'


interface OrdersummaryProps {
    selectedProducts: Product[];
}

const Ordersummary: React.FC<OrdersummaryProps> = ({ selectedProducts })=> {
   

      console.log('selectedProducts', selectedProducts)
    return (
    <>
    
      {selectedProducts.map((item, index) => (
         <div key={`${item.id}-${index}`} className={styles.order}>
      
          <div className={styles.containerCuantity}>
            <img
              className={styles.icon}
              src={reduce}
              alt="disminuir"
              
            />
            <p className={styles.orderCuantity}>
            {1}
            </p>
            <img
              className={styles.icon}
              src={add}
              alt="añadir"
              
            />
          </div>
          <p className={styles.orderProduct}>{item.name}</p>
          <p className={styles.orderPrize}>${item.price.toFixed(2)}</p>
          <img
            className={styles.cancelorange}
            src={cancelorange}
            alt="eliminar"
            
          />
        </div>
      ))}
    </>
  );


}
export default Ordersummary;