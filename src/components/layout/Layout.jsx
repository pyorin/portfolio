import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ title, content }) => {
  return (
    <div className="max-w-2xl bg-primary mx-auto p-5 rounded-md border-[3px] md:mt-20 border-borderCol text-secondary h-[100vh] md:h-auto">
      {title}
      <hr className="border-[2px] border-borderCol my-4" />
      {content}
      <hr className="border-[2px] border-borderCol my-4" />
      <div className="space-x-2">
        <Link to="/" className="text-links font-semibold hover:underline">
          Portfolio
        </Link>
        <span>|</span>
        <Link className="text-links font-semibold hover:underline" to="/blog">
          Blog
        </Link>
        <span>|</span>
        <Link
          className="text-links font-semibold hover:underline"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Layout;
