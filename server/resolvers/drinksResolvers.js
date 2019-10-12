const { Drink } = require("../models");

const drinksResolvers = {
  Query: {
    random: async (_source, { id }, { dataSources }) =>
      dataSources.cocktailsApi.getRandomDrink()
  }
};

module.exports = {
  drinksResolvers
};
