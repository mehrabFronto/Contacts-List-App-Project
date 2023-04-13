import { BiTrash } from "react-icons/bi";

const Contact = ({ contact, onSelect, onRemove }) => {
   return (
      <div className="item__container">
         <div
            className="item"
            style={{ cursor: "pointer" }}>
            {/* contact detail */}
            <div
               className="item__detail"
               onClick={() => onSelect(contact.id)}>
               <h3>{contact.name}</h3>
               <h3>{contact.email}</h3>
            </div>
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
