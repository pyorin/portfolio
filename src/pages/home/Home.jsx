import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../assets/images/loading.gif";

const Home = () => {
  const [portfolio, setPortfolio] = useState([]);

  const fetchApi = async () => {
    await axios
      .get("https://lavender-foal-kit.cyclic.app/api/projects")
      .then((d) => setPortfolio(d.data));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const title = (
    <h1 className="text-2xl font-semibold">Hello 👋, I'm Herlangga</h1>
  );

  const content =
    portfolio && portfolio.length > 0 ? (
      <ul className="list-disc px-7 space-y-2">
        {portfolio.map((portfolio, i) => (
          <li key={i}>
            <a
              className="text-links font-semibold hover:underline"
              href={portfolio.links}
              target="_blank"
              rel="noreferrer"
            >
              {portfolio.title}
            </a>
            <div className="flex items-center justify-between">
              <p>{portfolio.description}</p>
              <div className="flex flex-wrap justify-end space-x-1">
                {portfolio.stack.map((stack, i) => (
                  <img key={i} src={stack} alt="stack" width={25} height={25} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <>
        <h1 className="text-center mb-4">Loading...</h1>
        <img src={Loading} alt="loading" className="mx-auto rounded-md" />
      </>
    );

  return <Layout title={title} content={content} />;
};

export default Home;
