import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";
import { getAllContacts } from "../../services/getAllContactsService";
import { toast } from "react-toastify";
import { deleteContact } from "../../services/deleteContactService";

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

   const removeContactHandler = async (id) => {
      try {
         await deleteContact(id);

         const { data } = await getAllContacts();

         setContacts(data);

         toast.success("contact successfully deleted");
      } catch (err) {}
   };

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
         <Contact
            key={c.id}
            contact={c}
            onRemove={removeContactHandler}
         />
      ));
   };

   return (
      <div className="list__container">
         <h2>Contacts List :</h2>
         <div className="list">{renderContacts()}</div>
      </div>
   );
};

export default ContactsList;
