import { useEffect, useState } from "react";
import styles from "./SelectedContact.module.css";
import { BiX } from "react-icons/bi";
import { getOneContact } from "../../services/getOneContactService";
import { Link } from "react-router-dom";

const SelectedContact = ({ match, history }) => {
   const id = match.params.id;

   const [contact, setContact] = useState([]);

   useEffect(() => {
      const getContact = async () => {
         try {
            const { data } = await getOneContact(id);
            setContact(data);
         } catch (err) {
            console.log(err);
         }
      };

      getContact();
   }, [id]);

   const renderContactBody = () => {
      if (!id) return <h2>loading</h2>;

      return (
         <>
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
         </>
      );
   };

   return (
      //  selected contact card
      <div className={styles.selectedContact}>
         {/* header */}
         <div className={styles.selectedContact__header}>
            <h2>Contact</h2>
            <button
               className="btn btn--item"
               onClick={() => history.push("/")}>
               <BiX />
            </button>
         </div>
         {/* body */}
         <div className={styles.selectedContact__body}>
            {renderContactBody()}
         </div>
      </div>
   );
};

export default SelectedContact;
