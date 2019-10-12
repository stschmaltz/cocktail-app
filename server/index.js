require("dotenv").config({ path: ".env" });

const express = require("express");
const cors = require("cors");
const request = require("request");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { CocktailsApi } = require("./data/index");
// Construct a schema, using GraphQL schema language
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      cocktailsApi: new CocktailsApi()
    };
  }
});

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const env = process.env.NODE_ENV || "development";
const isProduction = env === "production";

const app = express();

app
  .use(cors())
  .use(cookieParser())
  .use(express.static(__dirname + "/public"));

server.applyMiddleware({ app });

app.listen({ port: 8888 }, () =>
  console.log(`🚀 Server ready at http://localhost:8888${server.graphqlPath}`)
);
