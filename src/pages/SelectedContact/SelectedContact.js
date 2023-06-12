import { useEffect, useState } from "react";
import { BiArrowBack, BiTrash } from "react-icons/bi";
import { getOneContact } from "../../services/getOneContactService";
import { toast } from "react-toastify";
import { deleteContact } from "../../services/deleteContactService";

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

   const removeContactHandler = async (id) => {
      try {
         await deleteContact(id);

         toast.success("contact successfully deleted");

         history.push("/");
      } catch (err) {}
   };

   const renderContactBody = () => {
      if (!id) return <h2>loading</h2>;

      return (
         <>
            {/* name */}
            <div className="w-full flex flex-col gap-y-1">
               <h3 className="text-xl">name :</h3>
               <h3 className=" ml-4 text-green-600">{contact.name}</h3>
            </div>
            {/* email */}
            <div className="w-full flex flex-col gap-y-1">
               <h3 className="text-xl">email :</h3>
               <h3 className="truncate ml-4 text-green-600">{contact.email}</h3>
            </div>
         </>
      );
   };

   return (
      //  selected contact card
      <>
         <h2 className="title text-xl md:text-2xl">Contact</h2>
         <div className="w-full md:w-[600px] lg:w-[800px] flex flex-col p-4 text-gray-200 shadow-2xl rounded-lg">
            {/* header */}
            <div className="w-full flex items-center justify-between bg-green-600 p-4 rounded-md text-slate-800 shadow-lg mb-6 relative top-[-20px] left-0 right-0">
               <button onClick={() => history.push("/")}>
                  <BiArrowBack className="text-xl" />
               </button>
               <button onClick={() => removeContactHandler(id)}>
                  <BiTrash className="text-xl hover:text-red-600 transition-all duration-200" />
               </button>
            </div>
            {/* body */}
            <div className="flex flex-col gap-y-6">{renderContactBody()}</div>
         </div>
      </>
   );
};

export default SelectedContact;
