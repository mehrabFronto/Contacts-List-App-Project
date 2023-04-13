import { NavLink, withRouter } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ counter }) => {
   const items = [
      { name: "Home", to: "/", exact: true },
      { name: "New Contact", to: "/new-contact" },
   ];

   return (
      <header className={styles.header}>
         <nav className={styles.nav}>
            <h1>Contacts List</h1>
            <ul className={styles.list}>
               {items.map((item) => {
                  return (
                     <li key={item.to}>
                        <NavLink
                           to={item.to}
                           className={styles.list__item}
                           activeClassName={styles.activeClassName}
                           exact={item.exact || false}>
                           {item.name}
                        </NavLink>
                     </li>
                  );
               })}
            </ul>
         </nav>
      </header>
   );
};

export default withRouter(Header);
