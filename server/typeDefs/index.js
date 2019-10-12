const { query } = require("./query");
const { drinkType, authorType } = require("./types");

const typeDefs = [query, drinkType, authorType];

module.exports = {
  typeDefs
};
