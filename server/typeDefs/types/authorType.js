const { gql } = require('apollo-server-express');

const authorType = gql`
  type Author {
    name: String
  }
`;

module.exports = {
  authorType
};
