const drinksResolvers = {
  Query: {
    getDrinksByLetter: async (_source, { letter }, { dataSources }) =>
      dataSources.cocktailsApi.getDrinksByLetter(letter),
    getDrinkByName: async (_source, { name }, { dataSources }) =>
      dataSources.cocktailsApi.getDrinkByName(name),
    getDrinkById: async (_source, { id }, { dataSources }) =>
      dataSources.cocktailsApi.getDrinkById(id),
    randomDrink: async (_source, _, { dataSources }) =>
      dataSources.cocktailsApi.getRandomDrink(),
    randomDrinks: async (_source, _, { dataSources }) =>
      dataSources.cocktailsApi.getRandomDrinks(),
    popularDrinks: async (_source, _, { dataSources }) =>
      dataSources.cocktailsApi.getPopularDrinks(),
    recentDrinks: async (_source, _, { dataSources }) =>
      dataSources.cocktailsApi.getRecentDrinks(),
    drinksByIngredient: async (_source, { ingredient }, { dataSources }) =>
      dataSources.cocktailsApi.filterDrinksByIngredient(ingredient),
    drinksByAlcoholic: async (_source, { alcoholic }, { dataSources }) =>
      dataSources.cocktailsApi.filterDrinksByAlcoholic(alcoholic),
    drinksByGlass: async (_source, { glass }, { dataSources }) =>
      dataSources.cocktailsApi.filterDrinksByGlass(glass),
    drinksByCategory: async (_source, { category }, { dataSources }) =>
      dataSources.cocktailsApi.filterDrinksByCategory(category)
  }
};

module.exports = {
  drinksResolvers
};
