import React, { useEffect, useState } from 'react';
import styles from './ProductAdmin.module.css';
import AddProduct from './AddProduct/AddProduct';
import { getProductData, addProduct, deleteProduct, editProduct} from '../../../request/request';
import { Product } from '../../productCard/ProductCard';
import { NewProduct } from '../../../utils/interface';
import Modalremove from '../../modalremove/Modalremove';
import ProductList from './ProductsList/ProductsList';

const ProductAdmin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editProductInfo, setEditProductInfo] = useState(Object);
  const [editProductState, setEditProductState] = useState<boolean>(false);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [id, setId] = useState<number>();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const token = localStorage.getItem('token');
    const data = await getProductData(token || '');
    setProducts(data);
  };

  const handleAddProduct = async (newProduct: NewProduct) => {
    await addProduct(newProduct);
    fetchProducts();
  };
      
  const handleShowModal = (state:boolean, id:number) => {
    setshowModal(state);
    setId(id);
  };
  const handleCancelModal = (state:boolean) => {
    setshowModal(state);
  };

  const handleDeleteProduct = async() => {
    await deleteProduct(String(id));
    setshowModal(false);
    fetchProducts();
  };
    
  const handleEditProductInfo = (selectedProduct:object) => {
    setEditProductInfo(selectedProduct);
    setEditProductState(true);
  };
  const handleEditProduct = async(id:string, newProduct:NewProduct) => {
    await editProduct(id, newProduct);
    setEditProductState(false);
    fetchProducts();
  };
  const handleReturn = () => {
    setEditProductState(false); 
    setEditProductInfo({});// Set the editProductState to false when returning from editing
  };
  /*    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            const data = await getProductData(token || '');
            setProducts(data);
        };

        fetchProducts();
    }, []); */

  return (
    <>
    
      <div className={styles.container}>
        <AddProduct onAddProduct={handleAddProduct} editProductInfo={editProductInfo} editProductState={editProductState} onEditProduct={handleEditProduct} onReturn={handleReturn}/>
        <ProductList products={products} showModal={handleShowModal} editProduct={handleEditProductInfo} />
      </div>

      {showModal && <Modalremove state={handleCancelModal} deleteItem= {handleDeleteProduct} isProduct={true} />}

    </>

  );

};

export default ProductAdmin;

