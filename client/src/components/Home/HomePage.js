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
      <div>
        <h1>Popular Drinks</h1>
        <PopularDrinksSection></PopularDrinksSection>
      </div>
      <div>
        <h1>Random Drinks</h1>
        <RandomDrinksSection></RandomDrinksSection>
      </div>
      <div>
        <h1>Recently Added Drinks</h1>
        <RecentDrinksSection></RecentDrinksSection>
      </div>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
