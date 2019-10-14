import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_RANDOM_DRINKS
} from "../../../queries/drinks";

const RandomDrinksSection = props => {
  const { loading, error, data } = useQuery(GET_RANDOM_DRINKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul>
        {data.randomDrinks.map(drink => (
          <li>
            <h3>{drink.strDrink}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

RandomDrinksSection.propTypes = {};

export default RandomDrinksSection;
