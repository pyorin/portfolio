import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Blog = () => {
  const title = <h1 className="text-2xl font-semibold">Blog</h1>;

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
          <p>21 Jan 2023</p>
        </div>
        <p className="w-[500px]">
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
