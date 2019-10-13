const { query } = require("./query");
const { drinkType, ingredientMeasureType } = require("./types");

const typeDefs = [query, drinkType, ingredientMeasureType];

module.exports = {
  typeDefs
};
