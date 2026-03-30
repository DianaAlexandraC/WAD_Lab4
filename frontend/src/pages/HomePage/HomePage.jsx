import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hello</h1>
      <p className={styles.subtitle}>Welcome to WAD Shop.</p>
    </div>
  );
}
