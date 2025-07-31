import styles from '../styles/Navbar.module.css';
import logo from '../assets/images/logo.png'; // adjust path if different


const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="Happiness Plans Logo" className={styles.logoImage} />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
        <div className={styles.mobileMenu} onClick={() => {
          document.querySelector(`.${styles.navLinks}`).classList.toggle(styles.active);
        }}>
          <span></span><span></span><span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
