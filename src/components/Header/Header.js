import { Link, NavLink, withRouter } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header className="w-full h-auto md:h-16 shadow-lg fixed text-gray-200 bg-green-600">
         <nav className="w-full h-full flex items-center justify-center">
            <ul className="w-full md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] h-full flex flex-col md:flex-row items-center justify-center justify-between text-base md:text-lg lg:text-xl md:pl-0 py-2 px-4">
               {/* mobile navbar */}
               <div className="w-full flex items-center justify-between">
                  <h1 className="text-2xl xl:text-3xl font-cold">
                     <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="lg:hover:tracking-wider transition-all duration-400 ease-out">
                        Contacts-List
                     </Link>
                  </h1>
                  <button
                     className="md:hidden btn btn-menu "
                     onClick={() => setIsOpen(!isOpen)}>
                     {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
                  </button>
               </div>
               {/* mobile list item */}
               {isOpen && (
                  <div className="md:hidden w-full flex flex-col items-start justify-start mt-8 gap-5">
                     <li className="w-full flex justify-between items-center">
                        <NavLink
                           to="/new-contact"
                           className="w-full py-2 flex justify-between items-center text-slate-800"
                           activeClassName="bg-slate-800 !text-green-600 rounded-md py-2 px-3"
                           onClick={() => setIsOpen(false)}>
                           New Contact
                        </NavLink>
                     </li>
                  </div>
               )}
               {/* desktop navbar */}
               <div className="hidden md:flex items-flex gap-5">
                  <li>
                     <NavLink
                        className="link hover:border-slate-800 hover:text-slate-800"
                        activeClassName="activeClassName hover:text-green-600"
                        to="/new-contact">
                        New Contact
                     </NavLink>
                  </li>
               </div>
            </ul>
         </nav>
      </header>
   );
};

export default withRouter(Header);
