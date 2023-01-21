import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Blog = () => {
  const title = (
    <div>
      <h1 className="text-2xl font-semibold">Blog</h1>
      <input
        type="text"
        className="w-full rounded-md border-[2px] border-borderCol bg-background px-3 py-1 mt-4 outline-none"
        placeholder="search"
      />
    </div>
  );

  const content = (
    <ul className="list-disc px-7 space-y-2">
      <li>
        <div className="flex justify-between items-center">
          <Link
            to="/blog/1"
            className="text-links font-semibold hover:underline"
          >
            First Post
          </Link>
          <p className="text-sm font-semibold">21 Jan 2023</p>
        </div>
        <p className="md:w-[520px] mt-2 md:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          velit corporis ipsum inventore doloribus explicabo porro obcaecati hic
          quidem iusto?
        </p>
      </li>
    </ul>
  );

  return (
    <div>
      <Layout title={title} content={content} />
    </div>
  );
};

export default Blog;
