import { Link } from "react-router-dom";

const BlogCard = ({ title, date, description }) => {
  return (
    <div>
      <ul className="list-disc px-7 space-y-2">
        <li>
          <div className="flex justify-between items-center">
            <Link
              to="/blog/1"
              className="text-links font-semibold hover:underline"
            >
              {title}
            </Link>
            <p className="text-sm font-semibold">{date}</p>
          </div>
          <p className="md:w-[520px] mt-2 md:mt-0">{description}</p>
        </li>
      </ul>
    </div>
  );
};

export default BlogCard;
