import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { GET_DRINK_BY_ID } from "../../queries/drinks";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "./DrinkPage.scss";

const DrinkPage = props => {
  const params = useParams();
  console.log(params);
  const { loading, error, data } = useQuery(GET_DRINK_BY_ID, {
    variables: { id: parseInt(params.id) }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const drink = data.getDrinkById;

  return (
    <div className="drink-page">
      <div className="drink-image-container">
        <img
          className="drink-image-img"
          src={drink.strDrinkThumb}
          alt={drink.strDrink + " thumbnail"}
        />
        <div className="drink-name-container">
          <h1 className="drink-name-text">{drink.strDrink}</h1>
        </div>
      </div>
      <div className="drink-info-container">
        <div className="drink-instructions-container">
          <ul className="drink-ingredients-list">
            {drink.ingredients.map(ingredient => (
              <li className="drink-ingredient-list-item" key={ingredient.name}>
                <span className="drink-ingredient-measure">
                  - {ingredient.measure && `${ingredient.measure} of `}
                </span>
                <span className="drink-ingredient-name">{ingredient.name}</span>
              </li>
            ))}
          </ul>
          <div className="drink-instructions-paragraph-container">
            <p className="drink-instructions-paragraph">
              {drink.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DrinkPage.propTypes = {};

export default DrinkPage;
