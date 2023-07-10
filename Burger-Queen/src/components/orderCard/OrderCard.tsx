import React, { useEffect, useState } from "react";
import styles from "./OrderCard.module.css";
import iconclock from "../../assets/iconclock.png";
import iconready from "../../assets/iconready.png";
import { getOrders, updateDataDelivering } from "../../request/request";

interface Order {
    id: number;
    client: string;
    products: {
      qty: number;
      product: {
        id: number;
        name: string;
        price: number;
        image: string;
        type: string;
        dateEntry: string;
      };
    }[];
    status: string;
    dataEntry: string;
    dataDelivering?: string;
    dateProcessed?: string;
}

const OrderCard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const notReadyOrders = orders.filter(order => order.status === 'pending');
  const [readyOrders, setReadyOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    }; 

    fetchOrders();
  }, []);

/*  const handleOrderReady = async (orderId: number) => {
    await updateDataDelivering(orderId);
    const updatedOrders = orders.filter((order) => order.status === 'pending');
    setOrders(updatedOrders); 
    
  };  */
  const handleOrderReady = async (orderId: number) => {
    await updateDataDelivering(orderId);
    const updatedOrders = orders.filter((order) => order.status === 'pending');
    const readyOrder = updatedOrders.find((order) => order.id === orderId);
    if (readyOrder) {
      const updatedNotReadyOrders = updatedOrders.filter((order) => order.id !== orderId);
      setOrders(updatedNotReadyOrders);
      setReadyOrders((prevReadyOrders) => [...prevReadyOrders, readyOrder]);
    }
};
  //   setOrders((prevOrders) =>
  //     prevOrders.map((order) =>
  //       order.id === orderId ? { ...order, status: "delivering" } : order
  //     )
  //   );
  // };

  return (
    <>
      {notReadyOrders.map((order, index) => (
        <div key={`${order.id}_${index}`} className={styles.containercheforder}>
          <div className={styles.headercheforder}>
            <div className={styles.containerordernumber}>
              <p className={styles.ordernumber}>{order.id}</p>
            </div>
            <img
              className={styles.iconclock}
              src={iconclock}
              alt="iconclock"
            ></img>
            <div className={styles.containertime}>
              <p className={styles.titleordertime}>Hora del pedido</p>
              <p className={styles.ordertime}>{order.dataEntry.slice(10)}</p>
            </div>
          </div>

          <section className={styles.containerorderlist}>
            <p className={styles.clientname}>{order.client}</p>
            
            <ul className={styles.productList}>
              {order.products.map((productItem, index ) => (
                <li key={index} className={styles.productItem}>
                  <p> {productItem.qty} </p>
                  <p className={styles.productName}>{productItem.product.name}</p>
                </li>
              ))}
            </ul>
          </section>
          <button className={styles.btnready} onClick={() => handleOrderReady(order.id)}>
            <img
              className={styles.iconready}
              src={iconready}
              alt="iconready"
            ></img> Orden lista
          </button>
        </div>
      ))}
    </>
  );
};

export default OrderCard;