const { RESTDataSource } = require("apollo-datasource-rest");
const endpoint = process.env.API_KEY ? `v2/${process.env.API_KEY}/` : "v1/1/";
const { extractIngredients } = require("./helpers");

class CocktailsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://www.thecocktaildb.com/api/json/${endpoint}`;
  }

  async getDrinkById(id) {
    const res = await this.get(`/lookup.php?i=${id}`);
    return extractIngredients(res.drinks[0]);
  }
  async getDrinkByName(name) {
    const res = await this.get(`/search.php?s=${name}`);
    return extractIngredients(res.drinks[0]);
  }
  async getDrinksByLetter(letter) {
    const res = await this.get(`/search.php?f=${letter}`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async getRandomDrink() {
    const res = await this.get(`/random.php`);
    return extractIngredients(res.drinks[0]);
  }
  async getRandomDrinks() {
    const res = await this.get(`/randomselection.php`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async getPopularDrinks() {
    const res = await this.get(`/popular.php`);
    console.log('yooooooo')
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async getRecentDrinks() {
    const res = await this.get(`/recent.php`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async filterDrinksByIngredient(ingredient) {
    const res = await this.get(`/filter.php?i=${ingredient}`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async filterDrinksByAlcoholic(alocoholic) {
    const alocoholicString = alocoholic ? "Alcoholic" : "Non_Alcoholic";
    const res = await this.get(`/filter.php?a=${alocoholicString}`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async filterDrinksByCategory(category) {
    const res = await this.get(`/filter.php?c=${category}`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async filterDrinksByGlass(glass) {
    const res = await this.get(`/filter.php?g=${glass}`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
}
module.exports = {
  CocktailsApi
};
