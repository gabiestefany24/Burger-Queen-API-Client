import React, { useState, useEffect } from 'react';
import styles from './AddProduct.module.css';
import addProductIcon from '../../../../assets/addNewProduct.png';
/* import { addProduct } from '../../../../request/request'; */
import { NewProduct } from '../../../../utils/interface';
import { Product } from '../../../productCard/ProductCard';

interface AddProductProps {
    onAddProduct: (newProduct: NewProduct) => void;
    editProductInfo: Product;
    editProductState:boolean;
    onEditProduct: (id:string, newProduct: NewProduct) => void;
}

  const AddProduct: React.FC<AddProductProps> = ({ onAddProduct, editProductInfo,  editProductState, onEditProduct }) => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productType, setProductType] = useState('Desayuno');
    const [productImage, setProductImage] = useState('');

   
    useEffect(() => {
        const handleEditProduct = () => {
            setProductName(editProductInfo.name);
            setProductPrice(editProductInfo.price !== undefined ? String(editProductInfo.price) : '');
            setProductImage(editProductInfo.image);
            setProductType(editProductInfo.type);
            
        }
        handleEditProduct();
    }, [editProductInfo]);

  
 
    const handleClick = () => {
        const newProduct = {
            name: productName,
            price:productPrice,
            type: productType,
            image: productImage,
        };
        
        editProductState ? onEditProduct(String(editProductInfo.id), newProduct) : onAddProduct(newProduct);
        
        /* addProduct(productName, productPrice, productImage, productType); */
       
        // Reset input values
        setProductName('');
        setProductPrice('');
        setProductImage('');
        setProductType('');
    };

    return (
        <form className={styles.formContainer}>
            {editProductState? <p className={styles.formTitle}> Editar Producto </p> : <p className={styles.formTitle}> Agregar Producto </p>}
            <label className={styles.labelInput}>
                Nombre del producto
                <input
                    className={styles.productInput}
                    name="productName"
                    value={productName || ''}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </label>
            <div className={styles.priceAndTypeContainer}>
                <label className={styles.labelInput}>
                    Precio
                    <input
                        className={styles.productInputPrice}
                        name="productPrice"
                        value={productPrice || ''}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </label>
                <label className={styles.labelInput}>
                    Tipo
                    <select
                        className={styles.productSelect}
                        name="selectedType"
                        value={productType || 'Desayuno'}
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
                    value={productImage || ''}
                    onChange={(e) => setProductImage(e.target.value)}
                />
            </label>  
            {editProductState? 
            <button className={styles.formBtn} type="button" onClick={handleClick}>
              <img src={addProductIcon} alt="Editar Product" />
                Editar
            </button> : <button className={styles.formBtn} type="button" onClick={handleClick}>
              <img src={addProductIcon} alt="Add Product" />
                Agregar
            </button>  }
        </form>
    );
};

export default AddProduct;

