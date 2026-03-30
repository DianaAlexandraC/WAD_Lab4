import { useNavigate, Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import styles from './CartPage.module.css';

export default function CartPage({ cart, onRemove, onUpdateQty, onCheckout }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Cart</h1>
      </div>

      <ul className={styles.list}>
        {/* TODO 2: Render the list of cart items using cart.map(). */}
      </ul>

      <div className={styles.summary}>
        {/* TODO 5-2; 6-4: Show the total price (compute with cart.reduce()) 
                and a Checkout button that clears the cart.*/}
      </div>
    </div>
  );
}