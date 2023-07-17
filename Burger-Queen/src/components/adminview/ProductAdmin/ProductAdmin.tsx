import React from 'react';
import styles from './ProductAdmin.module.css';
import AddProduct from './AddProduct/AddProduct';
import ProductList from './ProductsList/ProductsList';
import Header from '../../header/Header';

const ProductAdmin: React.FC = () => {
    

    return (
        <>
            <Header />
            <div className={styles.container}>
                <AddProduct />
                <ProductList />
            </div>

        </>


    )

}

export default ProductAdmin;