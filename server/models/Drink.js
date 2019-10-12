const { CocktailsApi } = require("../data");

class Drink {
  static random() {
    return dataSources.cocktailsApi.getRandomDrink(id);
  }
}

module.exports = {
  Drink
};
