import React, { useEffect, useState } from 'react';
import styles from './ProductAdmin.module.css';
import AddProduct from './AddProduct/AddProduct';
import { getProductData, addProduct, deleteProduct } from '../../../request/request';
import { Product } from '../../productCard/ProductCard';
import { NewProduct } from '../../../utils/interface';
import Modalremove from '../../modalremove/Modalremove';
import ProductList from './ProductsList/ProductsList';

const ProductAdmin: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showModal, setshowModal] = useState<boolean>(false);
    const [id, setId] = useState<number>();
    
    const handleShowModal = (state:boolean, id:number) => {
        setshowModal(state)
        setId(id)
    }
    const handleCancelModal = (state:boolean) => {
        setshowModal(state)
    }

    const handleDeleteProduct = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            deleteProduct(String(id))
            .then((data) => {
                setshowModal(false);
                fetchProducts();
                resolve(data);
            })
            .catch((error) => {
                // Manejar el error en caso de que la orden no se pueda crear
                console.log(error);
                reject(error);
              })
        })
    }
 /*    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            const data = await getProductData(token || '');
            setProducts(data);
        };

        fetchProducts();
    }, []); */
    
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
      
    return (
        <>
    
            <div className={styles.container}>
                <AddProduct onAddProduct={handleAddProduct}/>
                <ProductList products={products} showModal={handleShowModal}/>
            </div>

            {showModal && <Modalremove state={handleCancelModal} deleteProduct= {handleDeleteProduct} isProduct={true} />}

        </>


    )

}

export default ProductAdmin;