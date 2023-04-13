import ContactForm from "./components/ContactForm/ContactForm";
import SelectedContact from "./components/SelectedContact/SelectedContact";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
   { path: "/contacts/:id", component: SelectedContact },
   { path: "/new-contact", component: ContactForm },
   { path: "/", component: HomePage },
   { path: "*", component: NotFoundPage },
];

export default routes;
