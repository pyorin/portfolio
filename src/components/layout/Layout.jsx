import Sosmed from "../sosmed/Sosmed";

const Layout = ({ title, content }) => {
  return (
    <div className="max-w-2xl bg-primary mx-auto p-5 rounded-md border-[3px] md:mt-20 border-borderCol text-secondary h-[100vh] md:h-auto">
      {title}
      <hr className="border-[2px] border-borderCol my-4" />
      {content}
      <hr className="border-[2px] border-borderCol my-4" />
      <Sosmed />
    </div>
  );
};

export default Layout;
