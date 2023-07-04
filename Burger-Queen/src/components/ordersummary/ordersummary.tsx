import React, { useState } from 'react';
import { Product } from '../productCard/ProductCard';
import add from '../../assets/añadir.png'
import reduce from '../../assets/disminuir.png'
import cancelorange from '../../assets/cancelorange.png'
import styles from './ordersummary.module.css'

/* interface OrderItem extends Product {
    quantity: number;
  }
   */

interface OrdersummaryProps {
    selectedProducts: Product[];
}

const Ordersummary: React.FC<OrdersummaryProps> = ({ selectedProducts })=> {
   /*  const [orderItems, setOrderItems] = useState<OrderItem[]>([]) */
   const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  
 /* 
    const decreaseQuantity = (itemId: number) => {
        setOrderItems((prevOrderItems) =>
            prevOrderItems.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const increaseQuantity = (itemId: number) => {
        setOrderItems((prevOrderItems) =>
            prevOrderItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const removeItem = (itemId: number) => {
        setOrderItems((prevOrderItems) =>
            prevOrderItems.filter((item) => item.id !== itemId)
        );
    }; */
    
    
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

  const removeItem = (itemId: number) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
  };
  return (
    <>
      {selectedProducts.map((item) => (
        <div key={item.id} className={styles.order}>
          <div className={styles.containerCuantity}>
            <img
              className={styles.icon}
              src={reduce}
              alt="disminuir"
              onClick={() => decreaseQuantity(item.id)}
            />
            <p className={styles.orderCuantity}>
              {quantities[item.id] || 0}
            </p>
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
            onClick={() => removeItem(item.id)}
          />
        </div>
      ))}
    </>
  );


}
export default Ordersummary;