import styles from './Modalremove.module.css';
import removeorange from '../../assets/removeorange.png'
import cancelwhite from '../../assets/cancelwhite.png'


export interface ModalRemoveProps {
    state: (state: boolean) => void,
    deleteItem: () => void,
    isProduct: boolean
}
const Modalremove: React.FC<ModalRemoveProps> = ({ state, deleteItem, isProduct } /* requestDelete, id}  */) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                {isProduct ? <p className={styles.pModal}>¿Segura que desea eliminar este producto?</p> : <p className={styles.pModal}>¿Segura que desea eliminar este usuario?</p>}
                <div className={styles.btnContainer}>
                    <button className={styles.btnCancel} onClick={() => state(false)}><img className={styles.cancelwhite} src={cancelwhite} alt="cancelar" />Cancelar</button>
                    <button className={styles.btnRemove} onClick={() => deleteItem()}><img className={styles.cancelorange} src={removeorange} alt="eliminar" />Eliminar</button>
                </div>
            </div>
        </div>
    )
}
export default Modalremove