import { Link } from "react-router-dom";

const NotFoundPage = () => {
   return (
      <>
         <h1> Error 404 : not found page...</h1>
         <Link to="/">go back to home page</Link>
      </>
   );
};

export default NotFoundPage;
