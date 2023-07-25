import React from 'react';
import styles from './OrderDefault.module.css';
import iconclock from '../../assets/iconclock.png';

interface OrderDefaultProps {
  order: {
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
    dataDelivering: string;
    dateProcessed?: string;
  };
}

const OrderDefault: React.FC<OrderDefaultProps> = ({ order }) => {

  return (
    // orderElements.map((order, index) => (
  // <div key={`${order.id}_${index}`} className={styles.containercheforder}>
    <>
      <div className={styles.headercheforder}>
        <div className={styles.containerordernumber}>
          <p className={styles.ordernumber}>{order.id}</p>
        </div>
        <div className={styles.timeContainer}>
          <img className={styles.iconclock} src={iconclock} alt="iconclock"></img>
          <div className={styles.containertime}>
            <p className={styles.titleordertime}>Hora del pedido</p>
            <p className={styles.ordertime}>{order.dataEntry.slice(10)}</p>
          </div>
        </div>

      </div>

      <section className={styles.containerorderlist}>
        <p className={styles.clientname}>{order.client}</p>

        <ul className={styles.productList}>
          {order.products.map((productItem, index) => (
            <li key={index} className={styles.productItem}>
              <p> {productItem.qty} </p>
              <p className={styles.productName}>{productItem.product.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default OrderDefault;