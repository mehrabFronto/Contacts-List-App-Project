import styles from "./SelectedContact.module.css";
import { BiX } from "react-icons/bi";

const SelectedContact = ({ contact, setContact }) => {
   return (
      <>
         {/* back drop */}
         <div
            className={styles.backDrop}
            onClick={() => setContact(undefined)}></div>
         {/* selected contact card */}
         <div className={styles.selectedContact}>
            {/* header */}
            <div className={styles.selectedContact__header}>
               <h2>Contact</h2>
               <button
                  className="btn btn--item"
                  onClick={() => setContact(undefined)}>
                  <BiX />
               </button>
            </div>
            {/* body */}
            <div className={styles.selectedContact__body}>
               {/* name */}
               <div className={styles.selectedContact__detail}>
                  <h3>name :</h3>
                  <h3>{contact.name}</h3>
               </div>
               {/* email */}
               <div className={styles.selectedContact__detail}>
                  <h3>email :</h3>
                  <h3>{contact.email}</h3>
               </div>
            </div>
         </div>
      </>
   );
};

export default SelectedContact;
