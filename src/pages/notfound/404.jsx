import Layout from "../../components/layout/Layout";

const Notfound = () => {
  const content = (
    <h1 className="text-2xl font-semibold text-center">404 not found</h1>
  );

  return <Layout content={content} />;
};

export default Notfound;
