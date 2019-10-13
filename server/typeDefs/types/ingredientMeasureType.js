const { gql } = require('apollo-server-express');

const ingredientMeasureType = gql`
  type IngredientMeasure {
    name: String
    measure: String
  }
`;

module.exports = {
  ingredientMeasureType
};
