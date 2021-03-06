const { gql } = require('apollo-server-express');

const drinkType = gql`
  type Drink {
    idDrink: String
    strDrink: String
    strCategory: String
    strAlcoholic: String
    strGlass: String
    strInstructions: String
    strDrinkThumb: String
    ingredients: [IngredientMeasure]
  }
`;

module.exports = {
  drinkType,
};
