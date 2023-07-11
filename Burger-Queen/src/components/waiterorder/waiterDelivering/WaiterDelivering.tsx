import OrderCard from "../../orderCard/OrderCard";
import Waiterheader from "../waiterheader/Waiterheader"
import styles from "../waiterDelivering/WaiterDelivering.module.css"


const Waiterdelivering: React.FC = () => {
    
    return (
        <>
        <Waiterheader />
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