import React, {useState}  from "react";
import styles from "./AdminMain.module.css";
import Header from "../../header/Header";
import Navadmin from '../navadmin/Navadmin'
import ProductAdmin from "../ProductAdmin/ProductAdmin";
import AdminUsers from "../adminusers/adminusers";

const AdminMain: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('adminUsers');

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    }
    
    const renderSelectedOption = () => {
        switch (selectedOption) {
          case "adminProducts":
            return <ProductAdmin />;
          case "adminUsers":
            return <AdminUsers />;
          default:
            return <AdminUsers />;
        }
      };


     return(
        <>
            <Header />
            <div className={styles.container}>
            <Navadmin onOptionChange={handleOptionChange} selectedOption={selectedOption}/>
            
            </div>
            {renderSelectedOption()}
            
        </>
       


    )

}

export default AdminMain