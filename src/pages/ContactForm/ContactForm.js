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
      <>
         <h2 className="title text-xl md:text-2xl">Add Contact :</h2>
         <form
            onSubmit={submitHandler}
            className="w-full md:w-[600px] lg:w-[800px] shadow-2xl text-gray-200 rounded-lg">
            <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-6">
               {/* name section */}
               <div className="flex flex-col gap-2 text-green-600">
                  <label
                     htmlFor="name"
                     className="text-lg text-gray-200">
                     name :
                  </label>
                  {/* contact name input */}
                  <input
                     className="bg-transparent ml-4 shadow-xl rounded-md py-2 md:py-3 px-3 md:px-4 outline-none focus:ring-1 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-slate-800 transition-all duration-400"
                     type="text"
                     placeholder="contact name..."
                     onChange={(e) =>
                        setNewContact({ ...newContact, name: e.target.value })
                     }
                     value={newContact.name}
                     id="name"
                  />
               </div>
               {/* email section */}
               <div className="flex flex-col gap-2 text-green-600">
                  <label
                     htmlFor="email"
                     className="text-lg text-gray-200">
                     email :
                  </label>

                  {/* contact email input */}
                  <input
                     className="bg-transparent ml-4 shadow-xl rounded-md py-2 md:py-3 px-3 md:px-4 outline-none focus:ring-1 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-400"
                     type="email"
                     placeholder="contact email..."
                     onChange={(e) =>
                        setNewContact({ ...newContact, email: e.target.value })
                     }
                     value={newContact.email}
                     id="email"
                  />
               </div>
               {/* buttons */}
               <div className="flex items-center gap-4 mt-2">
                  {/* cancel btn */}
                  <button
                     type="button"
                     className="btn flex-1 text-green-600 hover:ring-2 hover:ring-green-600 hover:ring-offset-2 hover:ring-offset-slate-800"
                     onClick={() => {
                        setNewContact({ name: "", email: "" });
                        history.push("/");
                     }}>
                     Cancel
                  </button>
                  {/* add btn */}
                  <button
                     className="btn flex-1 bg-green-600 hover:ring-2 hover:ring-green-600 hover:ring-offset-2 hover:ring-offset-slate-800"
                     type="submit">
                     Add
                  </button>
               </div>
            </div>
         </form>
      </>
   );
};

export default ContactForm;
