import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const title = (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">First Post</h1>
        <p className="font-semibold">21 Jan 2023</p>
      </div>
      <p className="mt-2">
        posted by <span className="text-links underline">admin</span>
      </p>
    </div>
  );

  const content = (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        excepturi impedit voluptas quasi, nam assumenda est laudantium magnam ut
        perferendis?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        dicta sapiente sed fugiat repellat unde saepe obcaecati ex.
        Necessitatibus quas dolores natus fuga laboriosam quia aut tempora,
        voluptas explicabo vel.
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        dicta sapiente sed fugiat repellat unde saepe obcaecati ex.
        Necessitatibus quas dolores natus fuga laboriosam quia aut tempora,
        voluptas explicabo vel.
      </p>
    </div>
  );

  return (
    <div>
      <Layout title={title} content={content} />
    </div>
  );
};

export default BlogDetails;
