import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { GET_DRINK_BY_ID } from "../../queries/drinks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const DrinkPage = props => {
  const params = useParams();
  console.log(params);
  const { loading, error, data } = useQuery(GET_DRINK_BY_ID, {
    variables: { id: parseInt(params.id) }
  });
  console.log(data)
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h1>Drink: {data.getDrinkById.strDrink}</h1>
      <p>{data.getDrinkById.strInstructions}</p>
      <ul>
        {data.getDrinkById.ingredients.map(ingredient => (
          <li key={ingredient.name}>
            {ingredient.name}
            {ingredient.measure && `: ${ingredient.measure}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

DrinkPage.propTypes = {};

export default DrinkPage;
