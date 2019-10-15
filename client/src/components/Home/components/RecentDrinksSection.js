import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { GET_RECENT_DRINKS } from "../../../queries/drinks";
import DrinkCard from "../../common/Cards/DrinkCard";
import "./RecentDrinksSection.scss";

const RecentDrinksSection = props => {
  const { loading, error, data } = useQuery(GET_RECENT_DRINKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="recent-drinks-section">
      <div className="recent-drinks-header">
        <div className="recent-drinks-header-line line-a"></div>
        <h1 className="recent-drinks-title">Recently Added Drinks</h1>
        <div className="recent-drinks-header-line line-b"></div>
      </div>
      <div className="recent-drinks-row">
        {data.recentDrinks.slice(0, 6).map(drink => {
          console.log(drink);
          
          return (
          <DrinkCard drink={drink} />
        )})}
      </div>
    </div>
  );
};

RecentDrinksSection.propTypes = {};

export default RecentDrinksSection;
