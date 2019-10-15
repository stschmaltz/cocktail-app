import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { GET_POPULAR_DRINKS } from "../../../queries/drinks";
import DrinkCard from "../../common/Cards/DrinkCard";
import "./PopularDrinksSection.scss";

const PopularDrinksSection = props => {
  const { loading, error, data } = useQuery(GET_POPULAR_DRINKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="popular-drinks-section">
      <div className="popular-drinks-header">
        <div className="popular-drinks-header-line line-a"></div>
        <h1 className="popular-drinks-title">Popular Drinks</h1>
        <div className="popular-drinks-header-line line-b"></div>
      </div>
      <div className="popular-drinks-row">
        {data.popularDrinks.slice(0, 6).map(drink => {
          return <DrinkCard  drink={drink} />;
        })}
      </div>
    </div>
  );
};

PopularDrinksSection.propTypes = {};

export default PopularDrinksSection;
