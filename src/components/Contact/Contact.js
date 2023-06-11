import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = ({ contact, onRemove }) => {
   return (
      <div>
         <div>
            {/* contact detail */}
            <Link to={`/contacts/${contact.id}`}>
               <div>
                  <h3>{contact.name}</h3>
                  <h3>{contact.email}</h3>
               </div>
            </Link>
            {/* buttons */}
            <div>
               <button onClick={() => onRemove(contact.id)}>
                  <BiTrash />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Contact;
