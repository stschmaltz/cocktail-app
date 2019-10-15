import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { GET_RANDOM_DRINKS } from "../../../queries/drinks";
import DrinkCard from "../../common/Cards/DrinkCard";
import "./RandomDrinksSection.scss";

const PopularDrinksSection = props => {
  const { loading, error, data } = useQuery(GET_RANDOM_DRINKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="random-drinks-section">
      <div className="random-drinks-header">
        <div className="random-drinks-header-line line-a"></div>
        <h1 className="random-drinks-title">Random Drinks</h1>
        <div className="random-drinks-header-line line-b"></div>
      </div>
      <div className="random-drinks-row">
        {data.randomDrinks.slice(0, 6).map(drink => {
          console.log(drink);
          
          return (
          <DrinkCard drink={drink} />
        )})}
      </div>
    </div>
  );
};

PopularDrinksSection.propTypes = {};

export default PopularDrinksSection;
