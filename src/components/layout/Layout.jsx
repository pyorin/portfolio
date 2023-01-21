import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="max-w-2xl bg-primary mx-auto p-5 rounded-md border-[3px] mt-20 border-borderCol text-secondary">
        <h1 className="text-2xl font-semibold">
          Hello World 👋, I'm Herlangga
        </h1>
        <hr className="border-[2px] border-borderCol my-4" />
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
    </div>
  );
};

export default Layout;
