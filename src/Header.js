import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <h3>Welcome to my project</h3>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
