import React, { useState } from 'react';
import styles from './AddProduct.module.css';
import addProductIcon from '../../../../assets/addNewProduct.png';
import { addProduct } from '../../../../request/request';

const AddProduct: React.FC = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productType, setProductType] = useState('');
    const [productImage, setProductImage] = useState('');

    const handleAddProduct = () => {
        addProduct(productName, productPrice, productImage, productType);
        // Reset input values
        setProductName('');
        setProductPrice('');
        setProductImage('');
        setProductType('');
    };

    return (
        <form className={styles.formContainer}>
            <p className={styles.formTitle}>Agregar Producto</p>
            <label className={styles.labelInput}>
                Nombre del producto
                <input
                    className={styles.productInput}
                    name="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </label>
            <div className={styles.priceAndTypeContainer}>
                <label className={styles.labelInput}>
                    Precio
                    <input
                        className={styles.productInputPrice}
                        name="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </label>
                <label className={styles.labelInput}>
                    Tipo
                    <select
                        className={styles.productSelect}
                        name="selectedType"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                    >
                        <option value="Desayuno">Desayuno</option>
                        <option value="Almuerzo">Almuerzo</option>
                    </select>
                </label>
            </div>

            <label className={styles.labelInput}>
                Imagen(URL)
                <input
                    className={styles.productInput}
                    name="nombreProducto"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                />
            </label>
            <button className={styles.formBtn} type="button" onClick={handleAddProduct}>
                <img src={addProductIcon} alt="Add Product" />
                Agregar
            </button>
        </form>
    );
};

export default AddProduct;

