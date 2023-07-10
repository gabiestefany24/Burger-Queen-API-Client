import React, { useEffect, useState } from "react";
import styles from "./OrderCard.module.css";
import iconclock from "../../assets/iconclock.png";
import iconready from "../../assets/iconready.png";
import { getOrders } from "../../request/request";

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
    dateProcessed?: string;
}

const OrderCard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <>
      {orders.map((order, index) => (
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
            <p className={styles.titleordertime}>Hora del pedido</p>
            <p className={styles.ordertime}></p>
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
          <button className={styles.btnready}>
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
