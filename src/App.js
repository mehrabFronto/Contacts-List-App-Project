import "./App.css";
import ContactsApp from "./components/ContactsApp/ContactsApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
   return (
      <div className="app">
         <ToastContainer style={{ fontSize: "1.6rem" }} />
         <ContactsApp />
      </div>
   );
};

export default App;
