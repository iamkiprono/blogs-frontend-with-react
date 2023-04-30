import Blogs from "./Components/Blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddBlog from "./Components/AddBlog";
import AddMatches from "./Components/AddMatches";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/addmatch" element={<AddMatches />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
