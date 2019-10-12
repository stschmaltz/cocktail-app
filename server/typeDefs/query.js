const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    random: Drink
    authors: [Author]
  }
`;

module.exports = {
  query
};
