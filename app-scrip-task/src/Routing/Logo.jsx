import React from "react";
import "./logo.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { GrReactjs } from "react-icons/gr";

const Logo = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <GrReactjs size={40}  />
        </div>
        <div className="site-title">LOGO</div>

        <nav className="header-nav">
          <CiSearch  size={25} />
          <CiHeart size={25}/>
          <CiShoppingCart size={25} />
          <GoPeople size={25}/>
     
        </nav>
      </div>
    </header>
  );
};

export default Logo;
