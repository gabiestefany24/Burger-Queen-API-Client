import React from 'react';
import styles from './UserList.module.css';
import editIcon from '../../../../assets/editIcon.png';
import deleteIcon from '../../../../assets/deleteIcon.png';
import { User } from '../../../../utils/interface'

interface UserListProps{
  users: User[];
  showModal: (state: boolean, id: number) => void;
  editUser: (User:object) => void;
}

const UsersList: React.FC<UserListProps> = ({users, showModal, editUser}) => {
   

    return (
        <>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <caption>Administración de Usuarios</caption>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <img className={styles.editIcon} src={editIcon} onClick = {()=> editUser(user)} />
                    </td>
                    <td>
                      <img className={styles.deleteIcon} src={deleteIcon} onClick={ ()=> showModal(true, user.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    };
    
    export default UsersList;