import Layout from "../../components/layout/Layout";

const Notfound = () => {
  const content = (
    <div>
      <h1 className="text-2xl font-semibold text-center">404 not found</h1>
    </div>
  );

  return (
    <div>
      <Layout content={content} />
    </div>
  );
};

export default Notfound;
