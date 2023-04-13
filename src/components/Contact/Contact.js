import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = ({ contact, onRemove }) => {
   return (
      <div className="item__container">
         <div
            className="item"
            style={{ cursor: "pointer" }}>
            {/* contact detail */}
            <Link
               to={`/contacts/${contact.id}`}
               className="link">
               <div className="item__detail">
                  <h3>{contact.name}</h3>
                  <h3>{contact.email}</h3>
               </div>
            </Link>
            {/* buttons */}
            <div
               className="buttons__container"
               style={{ padding: "0px 20px" }}>
               <button
                  className="btn btn--item btn--delete"
                  onClick={() => onRemove(contact.id)}>
                  <BiTrash />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Contact;
