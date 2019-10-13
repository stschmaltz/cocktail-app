const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    randomDrink: Drink
    randomDrinks: [Drink]
    recentDrinks: [Drink]
    popularDrinks: [Drink]
  }
`;

module.exports = {
  query
};
