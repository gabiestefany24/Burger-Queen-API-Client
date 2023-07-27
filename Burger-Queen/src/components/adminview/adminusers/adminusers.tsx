import React, { useEffect, useState } from 'react';
import AddUsers from './AddUsers/AddUsers';
import UsersList from './UserList/UserList';
import styles from './adminusers.module.css';
import { getUserData, deleteUser, addUser, editUser  } from '../../../request/request';
import { User, NewUser } from '../../../utils/interface';
import Modalremove from '../../modalremove/Modalremove';

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setshowModal] =useState<boolean>(false);
  const [editUserInfo, setEditUserInfo] = useState(Object);
  const [editUserState, setEditUsersState] = useState<boolean>(false);
  const [id, setId] = useState<number>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    const data = await getUserData(token || '');
    setUsers(data);
  };

  const handleAddUser = async (newUser: NewUser) => {
    await addUser(newUser);
    fetchUsers();

  };

  const handleShowModal = (state:boolean, id:number) => {
    setshowModal(state);
    setId(id);
  };

  const handleCancelModal = (state:boolean) =>{
    setshowModal(state);
  };

  const handleEditUserInfo = (selectedUser:object) => {
    setEditUserInfo(selectedUser);
    setEditUsersState(true);
  };

  const handleDeleteUser = async() => {
    await deleteUser(String(id));
    setshowModal(false);
    fetchUsers();
  };

  const handleEditUser = async(id:string, newUser:NewUser) => {
    await editUser(id, newUser);
    setEditUsersState(false);
    fetchUsers();

  };

  const handleReturn = () => {
    setEditUsersState(false); 
    setEditUserInfo({});// Set the editProductState to false when returning from editing
  };

  return (
    <>
    
      <div className={styles.container}>
        <AddUsers onAddUser ={handleAddUser} editUserInfo={editUserInfo} editUserState={editUserState} onEditUser = {handleEditUser} onReturn={handleReturn}/>
        <UsersList users={users} showModal = {handleShowModal} editUser ={handleEditUserInfo}/>
      </div>

      {showModal && <Modalremove state={handleCancelModal} deleteItem= {handleDeleteUser} isProduct={false} />}

    </>

  );

};

export default AdminUsers;
