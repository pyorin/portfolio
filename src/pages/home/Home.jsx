import Layout from "../../components/layout/Layout";
import reactjs_icon from "../../assets/icons/reactjs.svg";
import tailwind_icon from "../../assets/icons/tailwind.svg";

const Home = () => {
  const title = (
    <h1 className="text-2xl font-semibold">Hello 👋, I'm Herlangga</h1>
  );

  const content = (
    <ul className="list-disc px-7 space-y-2">
      <li>
        <a
          className="text-links font-semibold hover:underline"
          href="https://github.com/pyorin/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          portfolio
        </a>
        <div className="flex justify-between items-center">
          <p>my portfolio</p>
          <div className="flex space-x-2">
            <img src={reactjs_icon} alt="stack" width={25} height={25} />
            <img src={tailwind_icon} alt="stack" width={25} height={25} />
          </div>
        </div>
      </li>
    </ul>
  );

  return <Layout title={title} content={content} />;
};

export default Home;
