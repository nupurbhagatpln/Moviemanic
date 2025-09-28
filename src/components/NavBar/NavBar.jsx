import React from "react";
import "./NavBar.css";
import fire from "../../assets/fire.png";
import star from "../../assets/glowing-star.png";
import party from "../../assets/partying-face.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1>Moviemaniac</h1>
      <div className="nav-bar-links">
        <a href="#popular">
          Popular <img src={fire} alt="fire_img" className="nav-bar-img" />
        </a>
        <a href="#top_rated">
          Top Rated <img src={star} alt="fire_img" className="nav-bar-img" />
        </a>
        <a href="#upcoming">
          Upcoming <img src={party} alt="fire_img" className="nav-bar-img" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
