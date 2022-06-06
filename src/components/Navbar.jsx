import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext); // <== ADD

  //  Update the rendering logic to display different content
  //  depending on the user being logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/products-list">
            <button>Products List</button>
          </Link>
          <button>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
          <button onClick={logoutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      <form action="/products-list" method="get">
        <input
          type="text"
          name="products-list"
          id="search-bar"
          placeholder="Ex: dresses, cloth diapers"
        />
        <button className="button-home" type="submit">
          Go
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
