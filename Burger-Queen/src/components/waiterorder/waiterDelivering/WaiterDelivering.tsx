import OrderCard from "../../orderCard/OrderCard";
import Header from "../../header/Header"
import styles from "../waiterDelivering/WaiterDelivering.module.css"


const Waiterdelivering: React.FC = () => {
    
    return (
        <>
         <Header/>
        <div className={styles.containerdelivered}>
            <p className={styles.waiterdeliveringtitle}>Órdenes listas para entregar</p>
        </div>
            <section className={styles.containercheforders}>
                <OrderCard status={"deliveringWaiter"}/>
            </section>
       
        </>
    )
}

export default Waiterdelivering;