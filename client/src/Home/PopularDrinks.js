import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_RECENT_DRINKS,
  GET_POPULAR_DRINKS,
  GET_RANDOM_DRINKS
} from "../Queries/drinks";

const PopularDrinks = props => {
  const { loading, error, data } = useQuery(GET_POPULAR_DRINKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul>
        {data.popularDrinks.map(drink => (
          <li>
            <h3>{drink.strDrink}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

PopularDrinks.propTypes = {};

export default PopularDrinks;
