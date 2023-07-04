import React, { useState, useEffect } from 'react';
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


  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedProducts.forEach((item) => {
      const quantity = quantities[item.id] || 1;
      const itemPrice = item.price * quantity;
      totalPrice += itemPrice;
    });
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    const initialQuantities: { [key: number]: number } = {};
    selectedProducts.forEach((item) => {
      initialQuantities[item.id] = quantities[item.id] || 1;
    });
    setQuantities(initialQuantities);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedProducts]);

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

  const calculatePrice = (item: Product) => {
    const quantity = quantities[item.id] || 1;
    return (item.price * quantity).toFixed(2);
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
            <p className={styles.orderCuantity}>{quantities[item.id] || 1}</p>
           
            <img
              className={styles.icon}
              src={add}
              alt="añadir"
              onClick={() => increaseQuantity(item.id)}
            />
          </div>
          <p className={styles.orderProduct}>{item.name}</p>
          <p className={styles.orderPrize}>${calculatePrice(item)}</p>
          <img
            className={styles.cancelorange}
            src={cancelorange}
            alt="eliminar"
            onClick={() => {
              onRemoveItem(item.id); // Llamar a la función onRemoveItem con el ID del producto
              setQuantities((prevQuantities) => {
                const updatedQuantities = { ...prevQuantities };
                delete updatedQuantities[item.id];
                return updatedQuantities;
              });
            }}
          />
        </div>
      ))}
       <div className={styles.containerTotal}>
            <p className={styles.totalTitle}>Total</p>
            <p className={styles.totalPrize}> ${calculateTotalPrice()}</p>
       </div>
    </>
  );
};

export default Ordersummary;

