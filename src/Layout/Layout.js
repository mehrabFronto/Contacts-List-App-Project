import Header from "../components/Header/Header";

const Layout = ({ children }) => {
   return (
      <div className="layout">
         <Header />
         {children}
      </div>
   );
};

export default Layout;
