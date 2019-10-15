import React from "react";
import PropTypes from "prop-types";
import "./DrinkCard.scss";

const DrinkCard = ({ drink }) => {
  return (
    <div key={drink.strDrink} className="drink-card-container">
      <div className="drink-image-container">
        <img
          className="drink-image-img"
          src={drink.strDrinkThumb}
          alt={drink.strDrink + " thumbnail"}
        />
      </div>
      <div className="drink-info-container">
        <h6 className="drink-info-name">{drink.strDrink}</h6>
      </div>
    </div>
  );
};

DrinkCard.propTypes = {};

export default DrinkCard;
