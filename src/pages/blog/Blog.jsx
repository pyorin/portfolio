import Layout from "../../components/layout/Layout";
import BlogCard from "../../components/blogcard/BlogCard";

const Blog = () => {
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
    <BlogCard
      title="First Post"
      date="21 Jan 2023"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit corporis ipsum inventore doloribus explicabo porro obcaecati hic quidem iusto?"
    />
  );

  return <Layout title={title} content={content} />;
};

export default Blog;
