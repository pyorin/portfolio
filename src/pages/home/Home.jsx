import Layout from "../../components/layout/Layout";

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
            <img
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/reactjs.svg"
              alt="stack"
              width={25}
              height={25}
            />
            <img
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/tailwind.svg"
              alt="stack"
              width={25}
              height={25}
            />
          </div>
        </div>
      </li>
    </ul>
  );

  return (
    <div>
      <Layout title={title} content={content} />
    </div>
  );
};

export default Home;
