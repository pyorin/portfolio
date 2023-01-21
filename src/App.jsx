import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/notfound/404";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blogdetails/BlogDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<BlogDetails />} />
      </Routes>
    </div>
  );
};

export default App;
