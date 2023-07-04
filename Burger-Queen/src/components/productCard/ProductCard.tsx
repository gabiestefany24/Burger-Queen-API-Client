import React, { useEffect, useState } from 'react'; 
import styles from './ProductCard.module.css'

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

interface ProductCardProps {
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}
  
const ProductCard: React.FC<ProductCardProps> = ({ onSelectProduct, selectedProducts }) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProducts = async () => {
          try {
    
            const response = await fetch('http://localhost:8080/products', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, [token]);

     const handleProductClick = (product: Product) => {
        if (!selectedProducts.find((selectedProduct) => selectedProduct.id === product.id)) {
            onSelectProduct(product);
          }
      }; 


    return (
        <>
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`${styles.cardProduct} ${selectedProducts.find((selectedProduct) => selectedProduct.id === product.id) ? styles.disabled : ''}`}
                    onClick={() => handleProductClick(product)}
                >
                    <img className={styles.imgproduct} alt={product.name} src={product.image} />
                    <div className={styles.titlecard}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            ))} 
        </>
    ) 

}

export default ProductCard

