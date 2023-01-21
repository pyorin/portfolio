import Layout from "../../components/layout/Layout";

const Home = () => {
  const title = (
    <h1 className="text-2xl font-semibold">Hello World 👋, I'm Herlangga</h1>
  );

  const content = (
    <ul className="list-disc px-7 space-y-2">
      <li>
        <a className="text-links font-semibold hover:underline" href="/#">
          Dotfiles
        </a>
        <p>My personal dotfiles.</p>
      </li>
      <li>
        <a className="text-links font-semibold hover:underline" href="/#">
          Dotfiles
        </a>
        <p>My personal dotfiles.</p>
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
