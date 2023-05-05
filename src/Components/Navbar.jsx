import { NavLink } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="navbar">
      <nav>
        <div className="logo">Admin</div>
        <div className="navlinks">
          <NavLink to="/">Blogs</NavLink>
          <NavLink to="/add">Add Blog</NavLink>
          <NavLink to="/addmatch">Add Matches</NavLink>
          <NavLink to="/livematches">Live Matches</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </div>
        <div className="logout">
          <button onClick={handleClick}>Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
