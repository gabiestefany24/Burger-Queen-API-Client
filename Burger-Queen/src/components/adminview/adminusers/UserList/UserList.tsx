import React, { useEffect, useState } from 'react';
import styles from './UserList.module.css';
import { getUserData } from '../../../../request/request';
import { User } from '../../../../utils/interface'
import editIcon from '../../../../assets/editIcon.png';
import deleteIcon from '../../../../assets/deleteIcon.png';


const UsersList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            const data = await getUserData(token || '');
            setUsers(data);
        };

        fetchProducts();
    }, []);


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
                      <img className={styles.editIcon} src={editIcon} />
                    </td>
                    <td>
                      <img className={styles.deleteIcon} src={deleteIcon} />
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