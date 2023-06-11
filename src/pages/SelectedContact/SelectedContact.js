import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { getOneContact } from "../../services/getOneContactService";

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
            <div>
               <h3>name :</h3>
               <h3>{contact.name}</h3>
            </div>
            {/* email */}
            <div>
               <h3>email :</h3>
               <h3>{contact.email}</h3>
            </div>
         </>
      );
   };

   return (
      //  selected contact card
      <div>
         {/* header */}
         <div>
            <h2>Contact</h2>
            <button onClick={() => history.push("/")}>
               <BiX />
            </button>
         </div>
         {/* body */}
         <div>{renderContactBody()}</div>
      </div>
   );
};

export default SelectedContact;
