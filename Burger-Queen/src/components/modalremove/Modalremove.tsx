import styles from './Modalremove.module.css';
import removeorange from '../../assets/removeorange.png'
import cancelwhite from '../../assets/cancelwhite.png'

// export interface WaitermodalProps {
//     showModal: (state: boolean) => void
// }

const Modalremove: React.FC/*<WaitermodalProps>*/ = (/*{showModal}*/) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <p className={styles.pModal}>¿Segura que desea eliminar este usuario?</p>
                <div className={styles.btnContainer}>
                    <button className={styles.btnCancel} /*</div>onClick={()=> (showModal(false))}*/><img className={styles.cancelwhite} src={cancelwhite} alt="cancelar"/>Cancelar</button>
                    <button className={styles.btnRemove} ><img className={styles.cancelorange} src={removeorange} alt="eliminar"/>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default Modalremove;