import AddUsers from "./AddUsers/AddUsers";
import UsersList from "./UserList/UserList";
import styles from "./AdminUsers.module.css";

const AdminUsers: React.FC = () => {
    

    return (
        <>
    
            <div className={styles.container}>
                <AddUsers />
                <UsersList />
            </div>

        </>


    )

}

export default AdminUsers;