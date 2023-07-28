import React from 'react';
import styles from './AdminView.module.css';
import iconkitchen from '../../assets/iconkitchen.png';
import  iconwaiter from '../../assets/iconwaiter.png';
import  iconadmin from '../../assets/iconadmin.png';
import { useNavigate } from 'react-router-dom';

const AdminView: React.FC = () => {
  const navigate = useNavigate();

  return(
    <>
      <section className={styles.containerAdminView}> 
                
        <div className={styles.containerbtn}>
          <p className={styles.adminviewtitle}>Seleccione para navegar</p>
          <button className={styles.btnadmin} onClick={()=>navigate('/chefview')}><img className={styles.iconadmin} src={iconkitchen} ></img><p>Cocina</p></button>
          <button className={styles.btnadmin} onClick={()=>navigate('/waiterorder')}><img className={styles.iconadmin} src={iconwaiter} alt="iconwaiter"></img><p>Meseros</p></button>
          <button className={styles.btnadmin} onClick={()=>navigate('/adminmain')}><img className={styles.iconadmin} src={iconadmin} alt="icon admin"></img><p>Administración</p></button>
        </div>
              
      </section>

    </>
  );
};

export default AdminView;