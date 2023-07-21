import React, { useState, useEffect} from "react";
import styles from "./AddUsers.module.css";
import addUserIcon from '../../../../assets/addNewProduct.png';
import {NewUser} from '../../../../utils/interface';
import {User} from '../../../../utils/interface'
import returnIcon from '../../../../assets/returnIcon.png';

interface AddUserProps {
  onAddUser :(NewUser:NewUser)=>void;
  editUserInfo:User;
  editUserState:boolean;
  onEditUser:(id:string, newUser:NewUser)=>void;
  onReturn: () => void;

}

const AddUsers: React.FC<AddUserProps> = ({onAddUser, editUserInfo, editUserState, onEditUser, onReturn}) => {
  
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('waiter');


  useEffect(()=>{
    const handleEditUser=()=>{
      setUserEmail(editUserInfo.email);
      setUserRole(editUserInfo.role);
    }
    handleEditUser()
  }, [editUserInfo])

  const handleClick = () => {
    const newUser ={
      email:userEmail,
      password: userPassword,
      role:userRole,
    };

    if (userPassword.trim() === '') {
      console.log('introduzca una contraseña')
      return;
    }

    editUserState ? onEditUser(String(editUserInfo.id), newUser): onAddUser(newUser);
    setUserEmail('');
    setUserPassword('');
    setUserRole('');
 
  }
 
  
  return (
    <>
      <main className={styles.backgroundadminusers}>
        <section className={styles.addUserContainer}>
          <form className={styles.formContainer}>
          {editUserState? <><img className={styles.returnIcon} src={returnIcon}  onClick={() => onReturn() } /><p className={styles.formTitle}> Editar Usuario </p> </>: <p className={styles.formTitle}> Agregar Usuario </p>}
            <label className={styles.labelInput}>Correo
            <input
              className={styles.productInput}
              type="text"
              value = {userEmail || ''}
              onChange={(e) => setUserEmail(e.target.value)}

            ></input>
            </label>
            <label className={styles.labelInput}>{editUserState ? 'Nueva contraseña' : 'Contraseña'}
            <input
              className={styles.productInput}
              type="password"
              value= {userPassword || ''}
              onChange={(e) => setUserPassword(e.target.value)}
            ></input>
            </label>
            <label className={styles.labelInput}>Rol
            <select
              className={styles.rolSelect}
               name="selectedType"
               value={userRole || 'Administrador'}
               onChange={(e) => setUserRole(e.target.value)}
           >
            
                        <option value={'admin'}>Administrador</option>
                        <option value={'chef'}>Chef</option>
                        <option value={'waiter'}>Mesero</option>
                    </select>
            </label>
            {editUserState?
            <button className={styles.formBtn} type="button" onClick={handleClick}>
              <img src={addUserIcon} alt="Edit User" />
                Editar
            </button> : <button className={styles.formBtn} type="button" onClick={handleClick}>
              <img src={addUserIcon} alt="Add User" />
                Agregar
            </button>  }
           
          </form>

        </section>
      </main>
    </>
  );
};

export default AddUsers;
