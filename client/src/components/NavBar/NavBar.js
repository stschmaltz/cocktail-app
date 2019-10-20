import React from "react";
import PropTypes from "prop-types";
import "./NavBar.scss";
import { useWindowSize } from "../../hooks/useWIndowSize";

const NavBar = props => {
  const { width } = useWindowSize();

  return (
    <div className="nav-bar-container">
      <div className="nav-logo">
        <a className="shadow" href="/">
          The Cocktail App
        </a>
      </div>
      {width > 900 && (
        <nav className="nav-bar">
          <a href="/popular" className="nav-link nav-link-popular">
            Popular Drinks
          </a>
          <a href="/randomdrinks" className="nav-link nav-link-randomdrinks">
            Random Drinks
          </a>
          <a href="/browse" className="nav-link nav-link-browse">
            Browse Drinks
          </a>
        </nav>
      )}
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
