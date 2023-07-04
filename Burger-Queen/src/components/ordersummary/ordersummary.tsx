import React, { useState }from 'react';
import { Product } from '../productCard/ProductCard';
import add from '../../assets/añadir.png';
import reduce from '../../assets/disminuir.png';
import cancelorange from '../../assets/cancelorange.png';
import styles from './ordersummary.module.css';

interface OrdersummaryProps {
  selectedProducts: Product[];
  onRemoveItem: (itemId: number) => void;
}

const Ordersummary: React.FC<OrdersummaryProps> = ({ selectedProducts, onRemoveItem }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const decreaseQuantity = (itemId: number) => {
    setQuantities((prevQuantities) => {
      const quantity = prevQuantities[itemId] || 0;
      const updatedQuantity = quantity > 0 ? quantity - 1 : 0;
      return { ...prevQuantities, [itemId]: updatedQuantity };
    });
  };

  const increaseQuantity = (itemId: number) => {
    setQuantities((prevQuantities) => {
      const quantity = prevQuantities[itemId] || 0;
      const updatedQuantity = quantity + 1;
      return { ...prevQuantities, [itemId]: updatedQuantity };
    });
  };

  return (
    <>
    
      {selectedProducts.map((item, index) => (
         <div key={`${item.id}-${index}`} className={styles.order}>
      
          <div className={styles.containerCuantity}>
            <img
              className={styles.icon}
              src={reduce}
              alt="disminuir"
              onClick={() => decreaseQuantity(item.id)}
            />
            <p className={styles.orderCuantity}>{quantities[item.id] || 0}</p>
            <img
              className={styles.icon}
              src={add}
              alt="añadir"
              onClick={() => increaseQuantity(item.id)}
            />
          </div>
          <p className={styles.orderProduct}>{item.name}</p>
          <p className={styles.orderPrize}>${item.price.toFixed(2)}</p>
          <img
            className={styles.cancelorange}
            src={cancelorange}
            alt="eliminar"
            onClick={() => onRemoveItem(item.id)} // Llamar a la función onRemoveItem con el ID del producto
          />
        </div>
      ))}
    </>
  );
};

export default Ordersummary;
