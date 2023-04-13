import { useState } from "react";
import { toast } from "react-toastify";
import { addNewContact } from "../../services/addNewContactService";

const ContactForm = ({ history }) => {
   // new user
   const [newContact, setNewContact] = useState({ name: "", email: "" });

   const addContactHander = async (contact) => {
      try {
         // add ctratedAt to the new data
         await addNewContact({
            ...contact,
            createdAt: new Date().toISOString(),
            postId: 10,
         });

         history.push("/");

         toast.success("contact successfully added");
      } catch (err) {}
   };

   const submitHandler = (e) => {
      e.preventDefault();
      // send the new data
      addContactHander(newContact);
      // clear the inputs
      setNewContact({ name: "", email: "" });
   };

   return (
      <form
         className="form"
         onSubmit={submitHandler}>
         <h2>Add Contact :</h2>
         <div className="form__body">
            <div className="form__input__container">
               <label>name :</label>
               {/* contact name input */}
               <input
                  type="text"
                  placeholder="contact name..."
                  className="form__input"
                  onChange={(e) =>
                     setNewContact({ ...newContact, name: e.target.value })
                  }
                  value={newContact.name}
               />
            </div>
            <div
               className="form__input__container"
               style={{ marginBottom: "10px" }}>
               <label>email :</label>

               {/* contact email input */}
               <input
                  type="email"
                  placeholder="contact email..."
                  className="form__input"
                  onChange={(e) =>
                     setNewContact({ ...newContact, email: e.target.value })
                  }
                  value={newContact.email}
               />
            </div>
            {/* buttons */}
            <div className="buttons__container">
               {/* cancel btn */}
               <button
                  className="btn btn--secondary"
                  type="button"
                  onClick={() => setNewContact({ name: "", email: "" })}>
                  Cancel
               </button>
               {/* add btn */}
               <button
                  className="btn btn--primary"
                  type="submit">
                  Add
               </button>
            </div>
         </div>
      </form>
   );
};

export default ContactForm;
