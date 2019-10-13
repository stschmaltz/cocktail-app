const drinksResolvers = {
  Query: {
    randomDrink: async (_source, { id }, { dataSources }) =>
      dataSources.cocktailsApi.getRandomDrink(),
    randomDrinks: async (_source, { id }, { dataSources }) =>
      dataSources.cocktailsApi.getRandomDrinks(),
    popularDrinks: async (_source, { id }, { dataSources }) =>
      dataSources.cocktailsApi.getPopularDrinks(),
    recentDrinks: async (_source, { id }, { dataSources }) =>
      dataSources.cocktailsApi.getRecentDrinks()
  }
};

module.exports = {
  drinksResolvers
};
