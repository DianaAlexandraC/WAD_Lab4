import styles from './CartItem.module.css';

export default function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <li className={styles.cartItem}>
      {/* TODO 3: Display the item image, name, and price. */}

      {/* Go to App.jsx, then TODO 4-2: Add a "Remove" button that calls handleRemove(). */}

      {/* Go to App.jsx, THEN TODO 6-4: Add quantity controls (− input +). Then, go to CartPage.jsx */}
    </li>
  );
}