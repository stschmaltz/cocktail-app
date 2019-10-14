import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { GET_DRINK_BY_NAME } from "../../queries/drinks";
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
  const { loading, error, data } = useQuery(GET_DRINK_BY_NAME, {
    variables: { name: params.id }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div>
      <h1>Drink: {data.getDrinkByName.strDrink}</h1>
      <p>
        {data.getDrinkByName.strInstructions}
      </p>
      <ul>
        {data.getDrinkByName.ingredients.map(ingredient => (
          <li>{ingredient.name}{ingredient.measure && `: ${ingredient.measure}`}</li>
        ))}
      </ul>
    </div>
  );
};

DrinkPage.propTypes = {};

export default DrinkPage;
