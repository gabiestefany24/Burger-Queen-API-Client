import React, { useState, useEffect } from 'react';
import { Product } from '../productCard/ProductCard';
import add from '../../assets/añadir.png';
import reduce from '../../assets/disminuir.png';
import cancelorange from '../../assets/cancelorange.png';
import styles from './ordersummary.module.css';
import cancelwhite from '../../assets/cancelwhite.png'
import checkwhite from '../../assets/checkwhite.png'
export interface OrdersummaryProps {
  selectedProducts: Product[];
  onRemoveItem: (itemId: number) => void;
  clearOrder: (setClient: React.Dispatch<React.SetStateAction<string>>) => void;
  createOrder: (client:string, selectedProducts: Product[], quantities: {
    [key: number]: number;
}) => Promise<string>;
}

const Ordersummary: React.FC<OrdersummaryProps> = ({ selectedProducts, onRemoveItem, clearOrder,createOrder }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({}); 
  const [client, setClient] = useState<string>('');

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedProducts.forEach((item) => {
      const quantity = quantities[item.id] || 1;
      const itemPrice = item.price * quantity;
      totalPrice += itemPrice;
    });
    return totalPrice.toFixed(2);
  };

  const handleCreateOrder = () => {
    if (client.trim() === '') {
      console.log('introduzca nombre de cliente')
      return;
    }

    createOrder(client, selectedProducts, quantities).then(() => {
      clearOrder(setClient);
    });
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
      <div className = {styles.containerClient}>
        <span>Cliente</span>
        <input className={styles.inputCliente} type='text'  value={client}
        onChange={(e) => setClient(e.target.value)}/>
      </div>
      {selectedProducts.map((item, index) => (

        <div key={`${item.id}-${index}`} className={styles.order}>
          <div className={styles.containerQuantity}>
            <img
              className={styles.icon}
              src={reduce}
              alt="disminuir"
              onClick={() => decreaseQuantity(item.id)}
            />
            <p className={styles.orderQuantity} data-testid={`p_quantity${item.id}`}>{quantities[item.id]||1}</p>

      
            <img
              data-testid={`add_${item.id}`}
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
            alt="eliminarProducto"
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
       <div className={styles.containerBtn}>
                <button className={styles.btnRemove} onClick={() => {clearOrder(setClient)}}><img className={styles.cancelorange} src={cancelwhite} alt="eliminar"></img>Borrar Orden</button>
                <button className={styles.btnSend} onClick={handleCreateOrder}><img className={styles.cancelorange} src={checkwhite} alt="enviar"></img>Enviar</button>
        </div>
    </>
  );
};

export default Ordersummary;

