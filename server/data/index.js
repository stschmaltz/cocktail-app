const { RESTDataSource } = require("apollo-datasource-rest");

class CocktailsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
  }

  // willSendRequest(request) {
  //   console.log(request);
  //   request.params.set("apikey", "1");
  // }
  async getRandomDrink() {
    console.log("hey");
    const res = await  this.get(`/randomselection.php`);
    console.log("hey", res);
    return res.drinks[0]
  }
}
module.exports = {
  CocktailsApi
};
