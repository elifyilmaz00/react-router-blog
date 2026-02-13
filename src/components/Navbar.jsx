import { Link, NavLink } from 'react-router-dom';
// CSS modülünü 'styles' adında bir nesne olarak import ediyoruz.
import styles from './Navbar.module.css';

function Navbar() {
  return (
    // className'lere artık string değil, styles nesnesinden gelen değeri veriyoruz.
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>React Blog</Link>
      <ul>
        <li><NavLink to="/">Anasayfa</NavLink></li>
        <li><NavLink to="/hakkimizda">Hakkımızda</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navbar;