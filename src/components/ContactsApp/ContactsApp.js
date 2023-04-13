import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactsList/ContactsList";
import Header from "../Header/Header";
import SelectedContact from "../SelectedContact/SelectedContact";
import { toast } from "react-toastify";

const ContactsApp = () => {
   const [contacts, setContacts] = useState([]);

   const [selectedContact, setSelectedContact] = useState(undefined);

   const selectContactHadnler = (id) => {
      const contact = contacts.find((c) => c.id === id);
      setSelectedContact(contact);
   };

   const addContactHander = (contact) => {
      // add more datail to the new data
      const newContact = {
         ...contact,
         id: new Date().getTime(),
         createdAt: new Date().toISOString(),
      };

      // set new data
      setContacts([...contacts, newContact]);

      toast.success("contact successfully added");
   };

   const removeContactHandler = (id) => {
      // filter the data
      const filteredContacts = contacts.filter((c) => c.id !== id);
      // set new data
      setContacts(filteredContacts);

      toast.success("contact successfully deleted");
   };

   return (
      <>
         <Header />
         <ContactForm onAddContact={addContactHander} />
         <ContactsList
            contacts={contacts}
            onSelect={selectContactHadnler}
            onRemove={removeContactHandler}
         />
         {selectedContact && (
            <SelectedContact
               contact={selectedContact}
               setContact={setSelectedContact}
            />
         )}
      </>
   );
};

export default ContactsApp;
