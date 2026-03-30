import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../components/Product';
import { getProducts } from '../../services/product.service';
import { addToCartApi } from '../../services/cart.service';
import styles from './ProductList.module.css';

export default function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  async function handleAddToCart(productId) {
    const product = await addToCartApi(productId);
    onAddToCart(product);
    /* TODO 7-1: After adding to cart, set the notification message to '${product.name} was added to cart!' 
          and use setTimeout to clear it after 3000ms. Then, go below*/
    
  }

  useEffect(() => {
    getProducts().then(products => setProducts(products));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products</h1>
      </div>
      {/* TODO 7-2: Add div to display notification (className={styles.notification})*/}

      <ul className={styles.list}>
        {products.map(product => (
          <Product
            key={`product-${product.id}`}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ul>
    </div>
  );
}
