import React from 'react';
import styles from './ProductsList.module.css';
import editIcon from '../../../../assets/editIcon.png';
import deleteIcon from '../../../../assets/deleteIcon.png';
import { Product } from '../../../productCard/ProductCard';

interface ProductListProps {
  products: Product[];
  showModal: (state: boolean, id: number) => void
  editProduct: (product:object) => void;
}
const ProductList: React.FC<ProductListProps>= ({products, showModal, editProduct}) => {
  
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
                  <img className={styles.editIcon} src={editIcon} onClick={ ()=> editProduct(product)}/>
                </td>
                <td>
                  <img className={styles.deleteIcon} src={deleteIcon} onClick={ ()=> showModal(true, product.id)} />
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