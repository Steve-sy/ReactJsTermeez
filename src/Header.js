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
              <NavLink to="/Articles">Articles</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
