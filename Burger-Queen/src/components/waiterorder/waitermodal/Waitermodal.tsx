import styles from './Waitermodal.module.css';
import greenCheck from '../../../assets/checkgreen.png';

export interface WaitermodalProps {
    removeModal: (state: boolean) => void
}

const Waitermodal: React.FC<WaitermodalProps> = ({ removeModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <img className={styles.checkIcon} src={greenCheck} alt="checkicono"></img>
        <p className={styles.pModal}>Tu orden se envió satisfactoriamente</p>
        <button className={styles.btnModal} onClick={()=> (removeModal(false))}>Continuar</button>
      </div>
    </div>
  );
};

export default Waitermodal;