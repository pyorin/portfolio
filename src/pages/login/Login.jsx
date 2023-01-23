import Layout from "../../components/layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const title = <h1 className="text-2xl font-semibold text-center">Login</h1>;

  const handleLogin = () => {
    username === "admin" && password === "admin"
      ? (() => {
          alert("sasuga mastah");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })()
      : alert("login error");
  };

  const content = (
    <>
      <input
        type="text"
        className="w-full rounded-md border-[2px] border-borderCol bg-background px-3 py-1 mt-4 outline-none"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="w-full rounded-md border-[2px] border-borderCol bg-background px-3 py-1 mt-4 outline-none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="mx-auto block mt-4 font-semibold py-2 px-12 bg-background border-[2px] rounded-md border-borderCol transition-all duration-300 hover:text-background hover:bg-slate-300 hover:border-background"
      >
        Login
      </button>
    </>
  );

  return <Layout title={title} content={content} />;
};

export default Login;
