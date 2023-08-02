import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        {/* con link hacemos que navegue cuando den clink en el h1 */}
      <Link to="/">
        <h1>e-commerce</h1>
      </Link>
      <nav>
        <ul>
          <li>login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
