import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactsList/ContactsList";
import Header from "../Header/Header";
import SelectedContact from "../SelectedContact/SelectedContact";
import { toast } from "react-toastify";
import { getAllContacts } from "../../services/getAllContactsService";
import { addNewContact } from "../../services/addNewContactService";
import { deleteContact } from "../../services/deleteContactService";

const ContactsApp = () => {
   const [contacts, setContacts] = useState([]);

   const [selectedContactId, setSelectedContactId] = useState(undefined);

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

   const selectContactId = (id) => setSelectedContactId(id);

   const addContactHander = async (contact) => {
      try {
         // add ctratedAt to the new data
         await addNewContact({
            ...contact,
            createdAt: new Date().toISOString(),
         });

         const { data } = await getAllContacts();

         setContacts(data);

         toast.success("contact successfully added");
      } catch (err) {}
   };

   const removeContactHandler = async (id) => {
      try {
         await deleteContact(id);

         const { data } = await getAllContacts();

         setContacts(data);

         toast.success("contact successfully deleted");
      } catch (err) {}
   };

   return (
      <>
         <Header />
         <ContactForm onAddContact={addContactHander} />
         <ContactsList
            contacts={contacts}
            onSelect={selectContactId}
            onRemove={removeContactHandler}
         />
         {selectedContactId && (
            <SelectedContact
               id={selectedContactId}
               setId={setSelectedContactId}
            />
         )}
      </>
   );
};

export default ContactsApp;
