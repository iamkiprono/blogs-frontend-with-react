import Blogs from "./Components/Blogs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddBlog from "./Components/AddBlog";
import AddMatches from "./Components/AddMatches";
import Matches from "./Components/Matches";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/Login";
import { useAuthContext } from "./Hooks/useAuthContext";
import BlogDetails from "./Components/BlogDetails";

const App = () => {
  const { user } = useAuthContext();

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/:id" element={<BlogDetails />} />
          <Route path="/addblog" element={!user ? <Navigate to="/login" /> :<AddBlog />} />
          <Route
            path="/addmatch"
            element={!user ? <Navigate to="/login" /> : <AddMatches />}
          />
          <Route path="/livematches" element={<Matches />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> :<SignUp />} />
          <Route path="/login" element={user ? <Navigate to="/" /> :<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
