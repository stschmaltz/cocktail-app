const { gql } = require('apollo-server-express');

const drinkType = gql`
  type Drink {
    strDrink: String
    strCategory: String
  }
`;

module.exports = {
  drinkType,
};
