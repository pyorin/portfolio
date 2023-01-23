import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Notfound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  const content = (
    <>
      <h1 className="text-2xl font-semibold text-center">404 not found</h1>
      <h1 className="text-2xl font-semibold text-center">
        you will be redirected to homepage...
      </h1>
    </>
  );

  return <Layout content={content} />;
};

export default Notfound;
