import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";
import { getAllContacts } from "../../services/getAllContactsService";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RiSearch2Line } from "react-icons/ri";

const ContactsList = () => {
   const [contacts, setContacts] = useState([]);
   const [searchValue, setSearchValue] = useState("");
   const [searchedContacts, setSearchedConatcts] = useState([]);

   useEffect(() => {
      // get all contacts on the first load
      const getContatcs = async () => {
         const { data } = await getAllContacts();
         setContacts(data);
         setSearchedConatcts(data);
      };

      try {
         getAllContacts();
      } catch (err) {}

      getContatcs();
   }, []);

   const searchHandler = ({ target }) => {
      setSearchValue(target.value);
      const search = target.value;
      if (searchValue === "") setSearchedConatcts(contacts);
      else {
         const newContacts = contacts.filter((c) =>
            Object.values(c)
               .join(" ")
               .toLowerCase()
               .includes(search.toLowerCase()),
         );

         setSearchedConatcts(newContacts);
      }
   };

   // conditional rendering
   const renderContacts = () => {
      // if there is not any contacts => return a message . else return the list of contacts
      if (contacts.length === 0)
         return (
            <div>
               <h2 className="text-green-600">loading...</h2>
            </div>
         );

      return searchedContacts.map((c) => (
         <Link
            to={`/contacts/${c.id}`}
            key={c.id}>
            <Contact contact={c} />
         </Link>
      ));
   };

   return (
      <>
         <h2 className="title text-xl md:text-2xl">Contacts List :</h2>
         {/* search bar */}
         <div className="w-full md:w-[600px] lg:w-[800px] flex items-center justify-start mb-4">
            <form className="w-1/2 flex items-center bg-transparent border border-gray-200 shadow-xl rounded-md py-1 px-2 ">
               <button className="mr-2">
                  <RiSearch2Line className="text-2xl text-gray-200" />
               </button>
               <input
                  type="text"
                  value={searchValue}
                  onChange={searchHandler}
                  placeholder="search name, email..."
                  className="w-full bg-transparent text-green-600 rounded-md p-2 outline-none truncate"
               />
            </form>
         </div>
         {/* conatcts list */}
         <div className="w-full md:w-[600px] lg:w-[800px] flex flex-col gap-6 shadow-2xl rounded-md p-4">
            {renderContacts()}
         </div>
      </>
   );
};

export default ContactsList;
