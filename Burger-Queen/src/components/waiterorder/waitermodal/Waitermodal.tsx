import styles from './Waitermodal.module.css';
import checkwhite from '../../../assets/checkgreen.png';

export interface WaitermodalProps {
    removeModal: (state: boolean) => void
}

const Waitermodal: React.FC<WaitermodalProps> = ({ removeModal }) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <p className={styles.pModal}>Tu orden se envió satisfactoriamente<img className={styles.cancelorange} src={checkwhite} alt="enviar"></img></p>
                <button className={styles.btnModal} onClick={()=> (removeModal(false))}>Continuar</button>
            </div>
        </div>
    )
}

export default Waitermodal;