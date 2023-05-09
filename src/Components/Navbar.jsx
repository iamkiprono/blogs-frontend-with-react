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
        <div className="logo">{user && user.admin ? "Admin" : "Not admin"}</div>
        <div className="navlinks">
          <NavLink to="/">Blogs</NavLink>
          {user && (
            <>
              <NavLink to="/addblog">Add Blog</NavLink>
              <NavLink to="/addmatch">Add Matches</NavLink>
            </>
          )}
          <NavLink to="/livematches">Live Matches</NavLink>
          {!user && (
            <div>
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/login">Log In</NavLink>
            </div>
          )}{" "}
          {user && (
            <div className="logout">
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
