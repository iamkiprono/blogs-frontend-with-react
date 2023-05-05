import { NavLink } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
          {!user && (
            <div>
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/login">Log in</NavLink>
            </div>
          )}
        </div>
        {user && (
          <div className="logout">
            <span>{user.email}</span>
            <button onClick={handleClick}>Logout</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
