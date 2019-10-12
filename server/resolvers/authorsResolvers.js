const { Author, Book } = require("../models");

const authorsResolvers = {
  Query: {
    authors: () => Author.all()
  },
  // Author: {
  //   books: author => {
  //     console.log("hey man", author);
  //     return Book.booksByAuthor(author);
  //   }
  // }
};

module.exports = {
  authorsResolvers
};
