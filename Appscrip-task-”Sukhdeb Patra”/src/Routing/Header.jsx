import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <><nav className="nav">
      <Link className="link-style" to="shop">
        SHOP
      </Link>
      <Link className="link-style" to="skills">
        SKILLS
      </Link>
      <Link className="link-style" to="stories">
        STORIES
      </Link>
      <Link className="link-style" to="about">
        ABOUT
      </Link>
      <Link className="link-style" to="contact">
        CONTACT US
      </Link>
    </nav> <hr />
    <div className="h3-text">
      DISCOVER OUR PRODUCTS
      
    </div><div className="lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum inventore quae! Quas ut earum animi vel provident deserunt natus reiciendis</div>
    </>
    
  );
};

export default Header;
