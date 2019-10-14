import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_RECENT_DRINKS,
} from "../../../queries/drinks";

const RecentDrinksSection = props => {
  const { loading, error, data } = useQuery(GET_RECENT_DRINKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul>
        {data.recentDrinks.map(drink => (
          <li>
            <h3>{drink.strDrink}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecentDrinksSection.propTypes = {};

export default RecentDrinksSection;
