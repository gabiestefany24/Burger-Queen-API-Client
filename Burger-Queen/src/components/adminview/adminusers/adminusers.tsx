import React from "react";
import styles from "./adminusers.module.css";
import Waiterheader from "../../waiterorder/waiterheader/Waiterheader";

const Adminusers: React.FC = () => {
  return (
    <>
      <Waiterheader />
      <main className={styles.backgroundadminusers}>
        <section className={styles.addusercontainer}>
          <form>
            <p>Agregar Usuario</p>
            <label>Correo</label>
            <input
              className={styles.inputemailuser}
              type="text"
              placeholder="Usuario"
            ></input>
            <label>Contraseña</label>
            <input
              className={styles.inputpassworduser}
              type="password"
              placeholder="Contraseña"
            ></input>
            <label>Rol</label>
            <input className={styles.inputroluser}></input>
          </form>
          <button className={styles.addUserButton}>Agregar</button>
        </section>
        <article className={styles.listuserscontainer}>
          <section className={styles.nav}>
            <nav className={styles.optionsNav}>
              <div className={styles.buttonsNav}>
                <button className={styles.btnUsers}>Usuarios</button>
                <button className={styles.btnProducts}>Productos</button>
              </div>
            </nav>
            <p className={styles.instructions}>Administración de Empleados</p>
          </section>
          <section className={styles.containerUsers}>
            <div className={styles.users}>
              <section className={styles.usersline}></section>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Adminusers;
