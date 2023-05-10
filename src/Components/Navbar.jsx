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
        <div className="border p-2 rounded">
          {user && user.admin ? user.email : "FullTime 360"}
        </div>
        <div className="navlinks ">
          <NavLink to="/">Blogs</NavLink>
          {user && (
            <>
              <NavLink to="/addblog">Add Blog</NavLink>
              <NavLink to="/addmatch">Add Matches</NavLink>
            </>
          )}
          <NavLink to="/livematches">Live Matches</NavLink>
          {!user && (
            <>
              {/* <NavLink to="/signup">Sign Up</NavLink> */}
              <NavLink to="/login">Log In</NavLink>
            </>
          )}{" "}
          {user && (
            <div className="logout">
              <button className="text-black" onClick={handleClick}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
