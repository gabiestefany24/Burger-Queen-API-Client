import React, { useEffect, useState } from "react";
import styles from "./OrderCard.module.css";
import iconready from "../../assets/iconready.png"
import icondelivered from "../../assets/icondelivered.png"
import { getOrders, updateDataDelivering } from "../../request/request";
import calculateTotalPreparationTime from "../../utils/totaltime";
import OrderDefault from "../orderDefault/OrderDefault";

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
  dataDelivering: string;
  dateProcessed?: string;
}

interface OrderCardProps {
  status: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ status }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const notReadyOrders = orders.filter((order) => order.status === "pending");
  const readyOrders = orders.filter((order) => order.status === "delivering");
  /* const completedOrders = orders.filter((order) => order.status === "delivered"); */

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const handleOrderReady = async (orderId: number, statusText: string) => {
    await updateDataDelivering(orderId);
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: statusText } : order
    );
    setOrders(updatedOrders);
  };


  return (
    <>
      {status === "pending" &&
        notReadyOrders.map((order, index) => (
          <div key={`${order.id}_${index}`} className={styles.containercheforder}>
            <OrderDefault order={order} />
            <button className={styles.btnready} onClick={() => handleOrderReady(order.id, "delivering")}>
              <img className={styles.iconready} src={iconready} alt="iconready"></img> Orden lista
            </button>

          </div>
        ))
      }
      {status === "delivering" &&
        readyOrders.map((order, index) => (
          <div key={`${order.id}_${index}`} className={styles.containercheforder}>
            <OrderDefault order={order} />
            <div className={styles.containerTotalTime}>
              <p className={styles.orderTimeText}>Preparación:</p>
              <p className={styles.ordertime}>{calculateTotalPreparationTime(order.dataEntry, order.dataDelivering)}</p>
            </div>

          </div>
        ))
      }

      {status === "deliveringWaiter" &&
      readyOrders.map((order, index) => (
        <div key={`${order.id}_${index}`} className={styles.containercheforder}>
          <OrderDefault order={order} />
          <button className={styles.btnready} onClick={() => handleOrderReady(order.id, "delivered")}>
              <img className={styles.icondelivered} src={icondelivered} alt="icondelivered"></img> Entregado
          </button>

        </div>
      ))
      }

    </>
  );
};

export default OrderCard;
