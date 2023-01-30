import Layout from "../../components/layout/Layout";
import BlogCard from "../../components/blogcard/BlogCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const fetchApi = async () => {
    await axios
      .get("https://lavender-foal-kit.cyclic.app/api/blog")
      .then((d) => setBlog(d.data));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const title = (
    <>
      <h1 className="text-2xl font-semibold">Blog</h1>
      <input
        type="text"
        className="w-full rounded-md border-[2px] border-borderCol bg-background px-3 py-1 mt-4 outline-none"
        placeholder="search"
      />
    </>
  );

  const content = (
    <>
      {blog && blog.length > 0 ? (
        blog.map((blog, i) => {
          return (
            <BlogCard
              title={blog.title}
              date="21 Jan 2023"
              description={blog.description}
              key={i}
            />
          );
        })
      ) : (
        <h1 className="text-center">Loading...</h1>
      )}
    </>
  );

  return <Layout title={title} content={content} />;
};

export default Blog;
