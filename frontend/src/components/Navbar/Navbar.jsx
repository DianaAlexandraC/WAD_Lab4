import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar({ itemCount }) {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/home" className={styles.brand}>WAD Shop</NavLink>
      <div className={styles.links}>
        <NavLink to="/home" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Products
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Cart {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
        </NavLink>
      </div>
    </nav>
  );
}
