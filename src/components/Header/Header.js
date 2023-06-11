import { Link, NavLink, withRouter } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header>
         <nav>
            <ul>
               {/* mobile navbar */}
               <div>
                  <h1>
                     <Link
                        style={{ color: "var(--primary-color)" }}
                        to="/"
                        onClick={() => setIsOpen(false)}>
                        Contact-List
                     </Link>
                  </h1>
                  <button onClick={() => setIsOpen(!isOpen)}>
                     {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
                  </button>
               </div>
               {/* mobile list item */}
               {isOpen && (
                  <div>
                     <li>
                        <NavLink
                           to="/new-contact"
                           onClick={() => setIsOpen(false)}>
                           New Contact
                        </NavLink>
                     </li>
                  </div>
               )}
               {/* desktop navbar */}
               <div>
                  <li>
                     <NavLink to="/new-contact">New Contact</NavLink>
                  </li>
               </div>
            </ul>
         </nav>
      </header>
   );
};

export default withRouter(Header);
