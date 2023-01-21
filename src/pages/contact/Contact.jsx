import Layout from "../../components/layout/Layout";

const Contact = () => {
  const title = <h1 className="text-2xl font-semibold">Contact</h1>;

  const content = (
    <ul className="list-disc px-7">
      <li>
        <a
          className="text-links font-semibold hover:underline"
          href="mailto:maulani.morningstar@gmail.com"
        >
          Email
        </a>
      </li>
      <li>
        <a
          className="text-links font-semibold hover:underline"
          href="https://discord.com/users/647262308342693888"
        >
          Discord
        </a>
      </li>
    </ul>
  );

  return (
    <div>
      <Layout title={title} content={content} />
    </div>
  );
};

export default Contact;
