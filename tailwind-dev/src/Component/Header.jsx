import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-500">
      <nav className="mx-auto flex">
        <div className="lg:flex lg:gap-x-12 p-3">
          <div className="relative">
            <Link
              to="/"
              className="text-sm font-semibold text-white mx-[10px]"
            >
              Home
            </Link>
            <Link
              to="/form"
              className="text-sm font-semibold text-white mx-[10px]"
            >
              Form
            </Link>
            <Link
              to="/user-list" // Change the path here as needed
              className="text-sm font-semibold text-white mx-[10px]"
            >
              User List
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
