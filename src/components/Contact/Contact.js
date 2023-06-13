import { BsFillPersonFill, BsArrowRightCircle } from "react-icons/bs";

const Contact = ({ contact }) => {
   return (
      <div className="w-full flex items-center gap-x-4 bg-green-600 rounded-lg p-2 text-slate-200 hover:ring-2 hover:ring-green-600 hover:ring-offset-2 hover:ring-offset-slate-800 hover:text-slate-800 transition-all">
         {/* contact icon */}
         <span>
            <BsFillPersonFill className="text-3xl text-gray-200" />
         </span>
         {/* contact detail */}
         <div className="flex flex-col flex-1 w-1/3 text-slate-800">
            <h3 className="font-bold">{contact.name}</h3>
            <h3 className="truncate">{contact.email}</h3>
         </div>
         <span>
            <BsArrowRightCircle className="text-2xl mr-1" />
         </span>
      </div>
   );
};

export default Contact;
