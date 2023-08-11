//Header.jsx
import "./styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      {/* con link hacemos que navegue cuando den clink en el h1 */}
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 className="title">e-commerce</h1>
      </Link>
      <nav>
        <ul>
          {/* Vinculamos el App.jsx con el header */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
