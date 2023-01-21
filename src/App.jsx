import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/notfound/404";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blogdetails/BlogDetails";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/1" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
