const { drinksResolvers } = require('./drinksResolvers');
const { authorsResolvers } = require('./authorsResolvers');

const resolvers = [drinksResolvers, authorsResolvers];

module.exports = {
  resolvers,
};
