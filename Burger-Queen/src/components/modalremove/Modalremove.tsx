import styles from './Modalremove.module.css';
import removeorange from '../../assets/removeorange.png'
import cancelwhite from '../../assets/cancelwhite.png'

export interface WaitermodalProps {
    state: (state: boolean) => void,
    deleteProduct: ()=> void,
} 

const Modalremove: React.FC <WaitermodalProps> = ( {state, deleteProduct,} /* requestDelete, id}  */) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <p className={styles.pModal}>¿Segura que desea eliminar este producto?</p>
                <div className={styles.btnContainer}>
                    <button className={styles.btnCancel} onClick={()=> state(false)}><img className={styles.cancelwhite} src={cancelwhite} alt="cancelar"/>Cancelar</button>
                    <button className={styles.btnRemove} onClick={()=> deleteProduct()}><img className={styles.cancelorange} src={removeorange} alt="eliminar"/>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default Modalremove;