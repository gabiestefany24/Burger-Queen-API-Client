import React from 'react';
import styles from './ProductAdmin.module.css';
import Waiterheader from '../../waiterorder/waiterheader/Waiterheader';
import AddProduct from './AddProduct/AddProduct';
import ProductList from './ProductsList/ProductsList';

const ProductAdmin: React.FC = () => {
    

    return (
        <>
            <Waiterheader />
            <div className={styles.container}>
                <AddProduct />
                <ProductList />
            </div>

        </>


    )

}

export default ProductAdmin;