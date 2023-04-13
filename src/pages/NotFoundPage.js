import { Link } from "react-router-dom";

const NotFoundPage = () => {
   const styles = {
      fontSize: "2rem",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "200px",
      justifyContent: "center",
   };

   return (
      <>
         <h1 style={styles}> Error 404 : not found page...</h1>
         <Link
            style={styles}
            to="/">
            go back to home page
         </Link>
      </>
   );
};

export default NotFoundPage;
