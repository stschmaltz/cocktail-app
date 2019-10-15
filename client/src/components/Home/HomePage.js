import React from "react";
import PropTypes from "prop-types";
import "./HomePage.scss";
import RecentDrinksSection from "./components/RecentDrinksSection";
import RandomDrinksSection from "./components/RandomDrinksSection";
import PopularDrinksSection from "./components/PopularDrinksSection";
import LandingSearchSection from "./components/LandingSearchSection";

const HomePage = () => {
  return (
    <>
      <LandingSearchSection></LandingSearchSection>
      <div className="home-page-container">
        <PopularDrinksSection></PopularDrinksSection>
        <RandomDrinksSection></RandomDrinksSection>
        <RecentDrinksSection></RecentDrinksSection>
      </div>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
