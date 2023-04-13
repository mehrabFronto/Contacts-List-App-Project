import styles from "./Header.module.css";

const Header = ({ counter }) => {
   return (
      <header className={styles.header}>
         <nav className={styles.nav}>
            <h1>Contacts List</h1>
         </nav>
      </header>
   );
};

export default Header;
