import React from "react";
import PropTypes from "prop-types";
import "./HomePage.scss";
import DrinksRow from "./components/DrinksRow";
import LandingSearchSection from "./components/LandingSearchSection";
import {
  GET_POPULAR_DRINKS,
  GET_RECENT_DRINKS,
  GET_RANDOM_DRINKS
} from "../../queries/drinks";

const HomePage = () => {
  return (
    <>
      <LandingSearchSection></LandingSearchSection>
      <div className="home-page-container">
        <DrinksRow
          title="Popular Drinks"
          query={GET_POPULAR_DRINKS}
          queryName="popularDrinks"
        />
        <DrinksRow
          title="Random Drinks"
          query={GET_RANDOM_DRINKS}
          queryName="randomDrinks"
        />
        <DrinksRow
          title="Recently Added"
          query={GET_RECENT_DRINKS}
          queryName="recentDrinks"
        />
      </div>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
