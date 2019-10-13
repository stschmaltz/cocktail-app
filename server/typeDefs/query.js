const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    getDrinkById(id: Int): Drink
    getDrinkByName(name: String): Drink
    getDrinksByLetter(letter: String): [Drink]
    randomDrink: Drink!
    randomDrinks: [Drink]!
    recentDrinks: [Drink]!
    popularDrinks: [Drink]!
    drinksByIngredient(ingredient: String): [Drink]
    drinksByGlass(glass: String): [Drink]
    drinksByCategory(category: String): [Drink]
    drinksByAlcoholic(alcoholic: Boolean): [Drink]
  }
`;

module.exports = {
  query
};
