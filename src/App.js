import "./App.css";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";

const App = () => {
   return (
      <div className="app">
         <ToastContainer style={{ fontSize: "1.6rem" }} />
         <Layout>
            <Switch>
               {routes.map((route) => (
                  <Route
                     {...route}
                     key={route.path}
                  />
               ))}
            </Switch>
         </Layout>
      </div>
   );
};

export default App;
