import Blogs from "./Components/Blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddBlog from "./Components/AddBlog";
import AddMatches from "./Components/AddMatches";
import Matches from "./Components/Matches";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/addmatch" element={<AddMatches />} />
          <Route path="/livematches" element={<Matches />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
