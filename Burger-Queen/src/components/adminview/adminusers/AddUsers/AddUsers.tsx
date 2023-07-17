import React  from "react";
import styles from "./AddUsers.module.css";
import addUserIcon from '../../../../assets/addNewProduct.png';

const AddUsers: React.FC = () => {
  return (
    <>
      <main className={styles.backgroundadminusers}>
        <section className={styles.addUserContainer}>
          <form className={styles.formContainer}>
            <p className={styles.formTitle}>Agregar Usuario</p>
            <label className={styles.labelInput}>Correo
            <input
              className={styles.productInput}
              type="text"
            ></input>
            </label>
            <label className={styles.labelInput}>Contraseña
            <input
              className={styles.productInput}
              type="password"
            ></input>
            </label>
            <label className={styles.labelInput}>Rol
            <select
              className={styles.rolSelect}
               name="selectedType"
            >
                        <option value={'admin'}>Administrador</option>
                        <option value={'chef'}>Chef</option>
                        <option value={'waiter'}>Mesero</option>
                    </select>
            </label>
            <button className={styles.formBtn}><img src={addUserIcon} alt="Add User" />Agregar</button>
          </form>
          
        </section>
      </main>
    </>
  );
};

export default AddUsers;
