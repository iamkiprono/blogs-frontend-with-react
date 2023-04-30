import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">Admin</div>
        <div className="navlinks">
          <NavLink to="/">Blogs</NavLink>
          <NavLink to="/add">Add Blog</NavLink>
          <NavLink to="/addmatch">Add Matches</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
