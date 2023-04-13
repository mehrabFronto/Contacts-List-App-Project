import Contact from "../Contact/Contact";

const ContactsList = ({ contacts, onSelect }) => {
   // conditional rendering
   const renderContacts = () => {
      // if there is not any contacts => return a message . else return the list of contacts
      if (contacts.length === 0)
         return (
            <div>
               <h2>there are no contacts yet!</h2>
            </div>
         );

      return contacts.map((c) => (
         <Contact
            key={c.id}
            contact={c}
            onSelect={onSelect}
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
