import React, { useEffect, useState } from 'react';
import styles from './ProductsList.module.css';
import { getProductData } from '../../../../request/request';
import { Product } from '../../../productCard/ProductCard';
import editIcon from '../../../../assets/editIcon.png';
import deleteIcon from '../../../../assets/deleteIcon.png';


const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            const data = await getProductData(token || '');
            setProducts(data);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        // Watch for changes in the products array
        const updateProducts = async () => {
          const token = localStorage.getItem('token');
          const data = await getProductData(token || '');
          setProducts(data);
        };
    
        updateProducts();
      }, [products]);

    return (
        <>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <caption>Administración de Productos</caption>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Tipo</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <img className={styles.imgProduct} alt={product.name} src={product.image} />
                    </td>
                    <td>{product.type}</td>
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
    
    export default ProductList;