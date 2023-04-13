import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SelectedContact from "./pages/SelectedContact/SelectedContact";
import ContactForm from "./pages/ContactForm/ContactForm";

const routes = [
   { path: "/contacts/:id", component: SelectedContact },
   { path: "/new-contact", component: ContactForm },
   { path: "/", component: HomePage },
   { path: "*", component: NotFoundPage },
];

export default routes;
