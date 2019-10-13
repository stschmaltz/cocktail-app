const { RESTDataSource } = require("apollo-datasource-rest");
const endpoint = process.env.API_KEY ? `v2/${process.env.API_KEY}/` : "v1/1/";
const { extractIngredients } = require("./helpers");

class CocktailsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://www.thecocktaildb.com/api/json/${endpoint}`;
  }

  // willSendRequest(request) {
  //   console.log(request);
  //   request.params.set("apikey", "1");
  // }
  async getRandomDrink() {
    const res = await this.get(`/random.php`);
    const drink = extractIngredients(res.drinks[0]);
    return drink;
  }
  async getRandomDrinks() {
    const res = await this.get(`/randomselection.php`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async getPopularDrinks() {
    const res = await this.get(`/popular.php`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
  async getRecentDrinks() {
    const res = await this.get(`/recent.php`);
    return res.drinks.map(drink => extractIngredients(drink));
  }
}
module.exports = {
  CocktailsApi
};
