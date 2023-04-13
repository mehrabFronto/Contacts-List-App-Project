import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactsList/ContactsList";
import Header from "../Header/Header";
import SelectedContact from "../SelectedContact/SelectedContact";

const ContactsApp = () => {
   const [contacts, setContacts] = useState([
      { id: 1, name: "folan1", email: "meharb@ex.com" },
      { id: 2, name: "folan2", email: "ali@ex.com" },
      { id: 3, name: "folan3", email: "karim@ex.com" },
      { id: 4, name: "folan4", email: "saheb@ex.com" },
   ]);

   const [selectedContact, setSelectedContact] = useState(undefined);

   const selectContactHadnler = (id) => {
      const contact = contacts.find((c) => c.id === id);
      setSelectedContact(contact);
   };

   return (
      <>
         <Header />
         <ContactForm />
         <ContactsList
            contacts={contacts}
            onSelect={selectContactHadnler}
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
