import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";
import { getAllContacts } from "../../services/getAllContactsService";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactsList = () => {
   const [contacts, setContacts] = useState([]);

   useEffect(() => {
      // get all contacts on the first load
      const getContatcs = async () => {
         try {
            const { data } = await getAllContacts();
            setContacts(data);
         } catch (err) {}
      };

      getContatcs();
   }, []);

   // conditional rendering
   const renderContacts = () => {
      // if there is not any contacts => return a message . else return the list of contacts
      if (contacts.length === 0)
         return (
            <div>
               <h2>loading...</h2>
            </div>
         );

      return contacts.map((c) => (
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
         <div className="w-full md:w-[600px] lg:w-[800px] flex flex-col gap-6 shadow-2xl rounded-md p-4">
            {renderContacts()}
         </div>
      </>
   );
};

export default ContactsList;
