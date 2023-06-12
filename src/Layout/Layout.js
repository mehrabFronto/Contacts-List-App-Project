import Header from "../components/Header/Header";

const Layout = ({ children }) => {
   return (
      <div>
         <Header />
         <main className="flex flex-col items-center justify-center w-full px-4">
            {children}
         </main>
      </div>
   );
};

export default Layout;
