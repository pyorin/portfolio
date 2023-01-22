import { Link } from "react-router-dom";

const Sosmed = () => {
  return (
    <div className="space-x-2">
      <Link to="/" className="text-links font-semibold hover:underline">
        Portfolio
      </Link>
      <span>|</span>
      <Link className="text-links font-semibold hover:underline" to="/blog">
        Blog
      </Link>
      <span>|</span>
      <Link className="text-links font-semibold hover:underline" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Sosmed;
