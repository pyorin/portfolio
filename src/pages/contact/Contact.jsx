import Layout from "../../components/layout/Layout";
import ContactComp from "../../components/contact/ContactComp";

const Contact = () => {
  const title = <h1 className="text-2xl font-semibold">Contact</h1>;

  const content = (
    <ul className="list-disc px-7">
      <ContactComp link="https://github.com/pyorin" sosmed="Github" />
      <ContactComp link="mailto:maulani.morningstar@gmail.com" sosmed="Email" />
      <ContactComp
        link="https://discord.com/users/647262308342693888"
        sosmed="Discord"
      />
    </ul>
  );

  return <Layout title={title} content={content} />;
};

export default Contact;
