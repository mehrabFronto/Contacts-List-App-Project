import { BiTrash } from "react-icons/bi";

const Contact = ({ contact, onSelect }) => {
   return (
      <div
         className="item__container"
         onClick={() => onSelect(contact.id)}>
         <div
            className="item"
            style={{ cursor: "pointer" }}>
            {/* contact detail */}
            <div className="item__detail">
               <h3>{contact.name}</h3>
               <h3>{contact.email}</h3>
            </div>
            {/* buttons */}
            <div className="buttons__container">
               <button className="btn btn--item btn--delete">
                  <BiTrash />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Contact;
